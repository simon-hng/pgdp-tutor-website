---
title: Why I am the smartest person ever
date: "2020-09-30T13:11:03.284Z"
description: "How I managed to automate the deployment process"
tags: ["hello", "world"]
---

If you can't tell, I am actually joking.
Actually I am even quite far from being intelligent with the amount of mistakes I made while doing this simple task
(don't look into the commit logs pls)

This website is now automatically deployed whenever I push a commit to its GitHub repository.

IDK, I really like that but that's all xd

```yml
# File: .github/workflows/node.ys.yml
# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm run build --if-present
      - name: ssh deploy
        # You may pin to the exact commit or the version.
        # uses: easingthemes/ssh-deploy@191986574c0735ffad7ae1a297a414d6e6f95375
        uses: easingthemes/ssh-deploy@v2.1.5
```