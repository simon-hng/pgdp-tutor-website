---
title: Linux terminal
date: "2020-10-16"
tags: ["Vorkurs", "Linux"]
description: "How do I use the terminal?"
---

# Commands

## "You're a wizard Harry"

![Ken Thompson](./Ken_Thompson.jpg)

Commands are the magic spells that the great wizards before us wrote.
They do magical things depending on their incantation.

### How do I cast magic?

The first time you open a terminal you will see some strange text and a blinking cursor.

The strange text on the left of the cursor should be your [present working directory](../linux-navigation)

---

Let's use our first command by simply typing:

```bash
$ echo "its leviosa not leviosa"
```

### All commands have the same structure

The first word is the name of the command: `echo`,
followed by its argument: `"its leviosa not leviosa"`

Additionally you can set _flags_ to modify the behaviour of the commands

#### Flags

You can set flags in two different ways:
with two minus signs (--) followed by the name of the flag,
or with a single minus sign (-) followed by the abbreviation of the flag.

So for example the following two commands are equal:

```bash
$ mkdir -p hello/world
$ mkdir --parents hello/world
```

However `mkdir -parents` is not the same as it would
set the flags `-p, -a, -r, -e, -n, -t, -s`

Many commands have a `-h` or `--help` flag that gives you
most of the relevant information that you need.

If that does not help you, you can still [DuckDuckGo](http://duckduckgo.com/) the command
or use the `man` command

### What are commands actually?

Commands are mostly programs. When you enter a command,
your terminal looks at your `$PATH` variable,
which contains all paths with programs, that can be run
from the command line.

> Variables in bash always start with a dollar sign \$
>
> try `echo $PATH` to see your \$PATH variable

To find out which program is run you can use the `which` command

```bash
$ which java
/usr/lib/jvm/jdk-14.0.1/bin/java
```

Sometimes your commands can also be something that is written in your
.bashrc like a function or an alias

But seriously, just think of them as magic spells and use them carefully
