---
title: How to install an actually decent IDE
date: "2020-10-23"
tags: ["PGDP"]
description: "How do I install a decent IDE with great autocompletion that is not ugly?"
---

# What is IDEA?

IntelliJ Idea is an IDE - an Integrated Development Environment,
which means that it is essentially a really fancy text editor,
that is packed with features and tools to help write code that works.

## Why would you choose IntelliJ Idea over Eclipse?

Personally, I initially chose it because it looked nicer,
but it also has a great autocompletion,
which really saves you a lot of time doing your homework :)

## Why do we install the community edition when we get the ultimate edition for free?

Because it's easier to explain for me and you don't need the ultimate features for pgdp.

# Scroll down to your OS to see the instructions

# Linux - Ubuntu

## Preferred method using snap

Enter your sudo password when you are asked to do so.

```bash
# update your repositories
sudo apt update

# install snap package manager
sudo apt install snapd

# install intellij idea
sudo snap install intellij-idea-community --classic
```

You can test if you installed it successfully by typing `idea` into your terminal,
which should start your IDE.

# Windows

1. Go to [this](https://www.jetbrains.com/idea/download/#section=windows) link and click the Download button on the right for the community edition
1. Open your downloads folder or wherever you downloaded the installer and open it
1. Keep clicking next and the install :)
