const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

async function feishuBotSendText(token, content) {
  const url = 'https://open.feishu.cn/open-apis/bot/v2/hook/' + token;
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = {
    msg_type: 'text',
    content: {
      text: content,
    },
  };
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  };
  const response = await (await fetch(url, options)).json();
  console.log(response);
  return response;
}

async function run() {
  try {
    const context = github.context;
    const pr_review_comment = context.payload.pull_request_review_comment;
    const pr_review = context.payload.review;
    const pr_comment = context.payload.comment;
    const pr = context.payload.pull_request;

    const feishuBotToken = core.getInput('feishu_bot_token');
    const repoUrl = core.getInput('repo_url');

    if (!feishuBotToken) {
      core.setFailed('Please set DingTalk access token!');
    }

    if (pr_review_comment || pr_comment) {
      const comment = pr_review_comment ? pr_review_comment : pr_comment;
      const prLink = repoUrl ? `${repoUrl}/${comment.number}` : `${comment.html_url}`;
      const content = `📢 通知: ${comment.user.login} 提交了 Comment: (${comment.body}) \n🔗 链接: ${prLink} \n`;
      await feishuBotSendText(feishuBotToken, content);
    } else if (pr_review) {
      if (pr_review.body) {
        const prLink = repoUrl ? `${repoUrl}/${pr_review.number}` : `${pr_review.html_url}`;
        const content = `📢 通知: ${pr_review.user.login} 提交了 Comment: (${pr_review.body}) \n🔗 链接: ${prLink} \n`;
        await feishuBotSendText(feishuBotToken, content);
      }
    } else if (pr) {
      const prLink = repoUrl ? `${repoUrl}/${pr.number}` : `${pr.html_url}`;
      const content = `📢 通知: ${pr.user.login} 创建（或更新）了 PR: (${pr.title}), 请 Review \n🔗 链接: ${prLink} \n`;
      await feishuBotSendText(feishuBotToken, content);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
