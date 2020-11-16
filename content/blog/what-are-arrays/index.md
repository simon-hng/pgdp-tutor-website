---
title: What are arrays actually?
date: "2020-11-16"
tags: ["PGDP", "Java", "C"]
description: "What are arrays, how are they saved and why do indexes start at 0?"
---

> Was sagt der shortest remaining time next scheduler zum speicher?
> Gib mal ein bite, mein prozess verhungert
>
> - Alan Turing

# Aren't arrays the same as lists?

![well yes but actually no](./well_yes_buy_actuall_no.jpg)
You see arrays were there straight from the beginning of programming,
back when people used Assember to write all of their programs.

No fancy classes, inheritance and other abstractions,
just some weird looking dudes that wrote multiple numbers into the memory.

# How arrays are saved in memory

Think of the memory like this:

```
       Address: values
0x7fffffffdc88: 0xb3    0x00    0xdf    0xf7    0xff    0x7f    0x00    0x00
0x7fffffffdc90: 0x20    0xc6    0xff    0xf7    0xff    0x7f    0x00    0x00
0x7fffffffdc98: 0x78    0xdd    0xff    0xff    0xff    0x7f    0x00    0x00
0x7fffffffdca0: 0x00    0x00    0x00    0x00    0x01    0x00    0x00    0x00
0x7fffffffdca8: 0x49    0x51    0x55    0x55    0x55    0x55    0x00    0x00
0x7fffffffdcb0: 0x70    0x51    0x55    0x55    0x55    0x55    0x00    0x00
0x7fffffffdcb8: 0x64    0x10    0xa2    0x71    0xd2    0x19    0xa9    0xee
0x7fffffffdcc0: 0x60    0x50    0x55    0x55    0x55    0x55    0x00    0x00

//Actual stack-dump from hello world program
```

Why are there letters in my numbers and what does 0x mean? -> [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)

On the left there are addresses,
that can be used to access and read or write each byte.

> A byte is 8 bit -> 8 bits are 8 digits in binary -> 8 digits in binary are 2 digits in hexadecimal (because of maths)
> -> each one of those 0x\_ \_ are a byte.

When we initialize an array we tell them the data type we use,
so that the compiler knows how many bytes there are per entry,
and how many entries we want, so that we can tell how many bytes
we need to _allocate_ overall.

> Allocating is like renting a locker at school so that nobody messes with your stuff,
> puts theirs inside, or steals yours

This step is precisely why we cant just write more entrys than we allocated.
It would be like getting your lockers,
filling them up and drilling a hole to your neighbours locker
to fill them up as well.

# Back to Java

To be honest, I don't really know how arrays are implemented in Java, _ups_.
So generally what I am talking about how they are implemented in other languages (mainly c).

Let's see an example of what a computer does when we tell him this:

```Java
int[] arr = new int[16];
```

You: Hey, I need 16 ints. An Integer is 4 bytes in Java so overall I need 4 \* 16 = 64 of those little lockers,
each containing a byte.

Computer: Dunno what you are talking about with lockers but take this: _beep boop_ `0xffff0000`

You: What the heck is that!? `arr[] = 0xffff0000`

Computer: Take a look at this:

```
  \/\/\/\/  The number our computer gave us
0xffff0000: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0008: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0010: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0018: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0020: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0028: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0030: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0038: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
```

The number our computer gave us is the start address of our array.
When we tell our program:

```java
arr[0];
```

That means add (0\*(size of int in bytes, which is 4)) to the start address of our array and _show we what you got._

> And thats why we start counting at zero for arrays.

When we write something into our array:

```java
arr[8] = 1;
```

We calculate start adress + 8 \* 4 (size of int),
and write into the following 4 boxes (again 4 because size of int)

```
  \/\/\/\/  The number our computer gave us
0xffff0000: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0008: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0010: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0018: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
           ---------------------
0xffff0020:|0x00 0x00 0x00 0x01|0x00 0x00 0x00 0x00
           ---------------------
0xffff0028: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0030: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
0xffff0038: 0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
```

> 1 is `0x00 00 00 01` in hexadecimal as java int

# The c programming language

This concept of variables not containing values but instead
addresses of values are called pointers in the c programming language.

You can point at all kinds of things,
just don't do it at other people because that's impolite.
