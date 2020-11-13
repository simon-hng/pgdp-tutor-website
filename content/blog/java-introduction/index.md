---
title: Java basics
date: "2020-11-10"
tags: ["PGDP", "Java"]
description: "Data types, variables, functions"
---

# Good coders copy, great coders steal, I just link

1. https://simonpannek.com/home/teaching/pgdp-2021/week-1/
1. https://itsmeyaw.com/learn-java/

# What are programs?

Programs are essentially what you did in high school.
A teacher (programmer) told you what to do and you just followed the instructions
and arrived at a result.

To do that you had to be taught about different types of numbers, ideas and objects,
so that you know what kind of operations you can do on them.

In programming these are called:

# Data types

A data type is essentially how a computer should interpret a bunch of ones and zeros.
All programming languages have a few _primitive types_ predefined,
those are the most basic data types.

## Primitive types

### Natural numbers

| name    | description                    | example |
| :------ | :----------------------------- | :------ |
| `byte`  | Number in [-2^7 ... 2^7 -1]    | `1337`  |
| `short` | Number in [-2^15 ... 2^15 -1]  | `1338`  |
| `int`   | Number in [-2^31 ... 2^31 -1]  | `1339`  |
| `long`  | Number in [-2^63 ... 2^63 -1]] | `1340`  |

### Floating point numbers

| name     | description                        | example |
| :------- | :--------------------------------- | :------ |
| `float`  | Floating point number with 32 bits | `0.1`   |
| `double` | Floating point number with 64 bits | `1.0`   |

### Others

| name   | description                       | example |
| :----- | :-------------------------------- | :------ |
| `bool` | `true` or `false`                 | `true`  |
| `char` | Unicode characters (letters ,etc) | `'a'`   |

## Strings

Strings are not primitive data types but instead an array of characters,
because we are using Java and OOP Strings are implemented as a class.

| name     | description                   | example          |
| :------- | :---------------------------- | :--------------- |
| `String` | A String of characters (text) | `"Hello World!"` |

## Arrays

Arrays are essentially a list of data for example:

`int[] nums = {0, 2, 4, 6};`

If we want to get a element we use the array name followed by square brackets `[]`

> **Indexes start at 0!!**

To get the first element: `nums[0]`,
second: `nums[1]`, etc

## Basic operators

| name | description                                   | example                                   |
| :--- | :-------------------------------------------- | :---------------------------------------- |
| `=`  | Assignment                                    | `boolean var = true;`                     |
| `+`  | Addition (could also be String concatenation) | `"Hello" + " World!"` -> `"Hello World!"` |
| `-`  | Substractions                                 | `1 - 0` -> `1`                            |

## Comparators

Comparators are operators take two arguments and returns true or false depending on their definition

| name | description                    | example                 |
| :--- | :----------------------------- | :---------------------- |
| `==` | Equals                         | `'a' == 'b'` -> `false` |
| `!=` | Not equals                     | `'a' == 'b'` -> `true`  |
| `>`  | Left side larger than right    | `1 > 2` -> `false`      |
| `<`  | Left side smaller than right   | `1 < 2` -> `true`       |
| `>=` | Left side larger equals right  | `1 >= 1` -> `true`      |
| `<=` | Left side smaller equals right | `1 <= 2` -> `true`      |

## Logic

Logic operators take two boolean arguments and return true or false depending on their mathematical definition

| name      | description | example                   |
| :-------- | :---------- | :------------------------ |
| `&&`      | and         | `true && true` -> `true`  |
| see below | or          | `false or true` -> `true` |

> or is `||` but I can't write it inside the table because it messes with my formatting :c

## Control flow

Control flow structures are essentially keywords that make your code do
one thing if a condition evaluates to true and another thing if it evaluates to false.

### if-statements

```Java
// condition has to be a boolean
if (condition) {
  //do something
}
```

### if-else-statements

```Java
if (condition) {
  //do this if condition is true
} else {
  //do this if condition is false
}
```

### while-loop

```Java
while (condition) {
  //repeats statements here until condition is false
}
```

## Functions

Functions are groupings of code that take some variables as parameter and might return something.
To declare one you need to write a function-header which defines the name, the parameters and the return type.

```Java
      String function(int parameter1, char parameter2){
//    ^return data type (void is no return value)
//         ^function name
//                  ^parameters and their types in round brackets
        ...
      }
```

When you call a function you have to give them as many parameters as specified

```Java
function(1, 'a');
// Jumps to the function
// parameter1 is now 1 and parameter2 is now 'a'
```

Inside of the function you can now do something with your variables and return a value
to solve a single problem (ideally).

Functions are great. If you are given a large problem,
I advise you to decompose it into smaller problems and solving
each one using a helper function
