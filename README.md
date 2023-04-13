<p align="center">
  <a href="">
    <img width="140" src="https://avatars.githubusercontent.com/u/73879334?s=200&v=4" />
  </a>
</p>

<h1 align="center">Ding Talk PR Notify</h1>

![](https://img.shields.io/github/workflow/status/actions-cool/action-js-template/CI?style=flat-square)
[![](https://img.shields.io/badge/marketplace-action--js--template-blueviolet?style=flat-square)](https://github.com/marketplace/actions/action-js-template)
[![](https://img.shields.io/github/v/release/actions-cool/action-js-template?style=flat-square&color=orange)](https://github.com/actions-cool/action-js-template/releases)

## 🚀 How to use?

```bash
name: 🔊 PR Ding Talk Notify

on: [pull_request, issue_comment, pull_request_review_comment]

# 如果不想频繁的收到提示, 可以只在PR打开的时候提示
# on:
#   pull_request:
#     types: [opened]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: lijinke666/ding-talk-pr-notify@main
        with:
          feishu_bot_token: ${{ secrets.DING_TALK_ACCESS_TOKEN}}  # 钉钉 webhook token (必填)
          extra_content: '' # 额外的文本内容 (可选)
```

![image](https://user-images.githubusercontent.com/21015895/114188466-c16b6480-997b-11eb-8953-f881cc3a04ee.png)

## 📒 Catalog Introduction

```
├── .github/workflows/     The CI for make sure it is packaged correctly
├── dist                   Package the generated Aciton execution code
├── src                    Component home directory
│   └── main.js            Your code
└── action.yml             Action config
```

The rest of the documents can be consulted by yourself.

## 🤖 Command introduction

| Name | Desc |
| -- | -- |
| package | action build for release |
| format | prettier write |
| format-check | prettier check |

## ⚡ Feedback

You are very welcome to try it out and put forward your comments. You can use the following methods:

- Report bugs or consult with [Issue](https://github.com/actions-cool/action-js-template/issues)
- Submit [Pull Request](https://github.com/actions-cool/action-js-template/pulls) to improve the code of `action-js-template`

也欢迎加入 钉钉交流群

![](https://github.com/actions-cool/resources/blob/main/dingding.jpeg?raw=true)

## Changelog

[CHANGELOG](./CHANGELOG.md)

## LICENSE

[MIT](./LICENSE)
