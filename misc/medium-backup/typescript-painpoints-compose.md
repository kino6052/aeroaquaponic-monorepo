## TypeScript Pain Points: Compose Function

![Composing functions](https://cdn-images-1.medium.com/max/2000/1*LCry5lcP8XWLM64LiEiXPA.png)

I’ve been working with TypeScript for a while now and have to admit that it is one of my favorite tools as it makes many day to day dev tasks much easier.

However, when TypeScript meets React or Redux things get a bit ugly. Types associated with React components and logic are notoriously messy.

Typing higher order components (HOCs) and composing them is yet another level of messy.

In this article, I will attempt to examine one specific use case related to TypeScript and Redux that I believe is very important because once this use case gets resolved, then TypeScript would get to a whole new level both in terms of functionality and adoption.

### Problem Statement

The problem is that currently there is no good way of typing a compose function in TypeScript.

Let’s declare some decorator functions:

![](https://cdn-images-1.medium.com/max/2032/1*QwvlDhsUEucDMtDPeTBwSg.png)

**Compose function is a function that turns this:**

![](https://cdn-images-1.medium.com/max/2106/1*l5BU1b05LgHS3YhvZUAw4A.png)

**Into this:**

![](https://cdn-images-1.medium.com/max/2244/1*ZupEWCUYjjWtGOfmYOhW3A.png)

It’s a best practice and experience shows that it is indeed much easier to work with compose signature than with nested functions.

**Unfortunately, in terms of TypeScript, currently, there is no good way to do typing for the compose function:**

![TS inference for nested functions works well](https://cdn-images-1.medium.com/max/2000/1*43KZ8hQ7Xs5mdRScfauqRw.png)

![TS inference for Redux compose function doesn’t work…](https://cdn-images-1.medium.com/max/2000/1*2RFdSxljGAEQpPfFtc5LdA.png)

### Background

If you look what’s under the hood, you will see that compose is typed like so:
{% gist https://gist.github.com/kino6052/39f25886c2c481d7a78163aaf6b1959a.js %}
The problem with these definitions is that the **implicit inference in TypeScript works from left to right **(A => B, B => C, C => D ), but here it’s right to left (C => D, B => C, A => B). This means that **right-to-left inference has to be explicitly typed by you.**

This pretty much kills the beauty of typing as it now requires you to do this by hand which is quite painful and contributes to poor dev experience.

### In Search of a Solution

I found a couple of resources about typing the compose function ([here](https://minaluke.medium.com/typescript-compose-function-b7512a7cc012), [here](https://dev.to/ascorbic/creating-a-typed-compose-function-in-typescript-3-351i), [here](https://catchts.com/FP-style), [here](https://stackoverflow.com/questions/49310886/typing-compose-function-in-typescript-flow-compose), and some resources about flowtype $Compose). But none of these solutions really work and at best provide the return type of the last function to be called.

I tried to hack something on my own and came up with a super hacky solution, which, surprisingly, does work.

**The hack I use relies on:**

1.  **TypeScriptconst assertion**

2.  **left-to-right pipe function declarations**

3.  **Recursive type for reversing a readonly tuple.**

4.  **Auxiliary calculation declarations**

So, to elaborate:

1.  If we type function array as a readonly tuple, we will be able to spoon-feed it to TypeScript type system to make it correctly calculate input-output types

![Readonly tuple of functions for easy digestion](https://cdn-images-1.medium.com/max/2000/1*TJ2aZVJMMM5bD0d6WENZBQ.png)

2. left-to-right pipe function declarations will allow us to correctly compute the return type

![Pipe function declarations](https://cdn-images-1.medium.com/max/2000/1*OH3Bn2U04NqZnFY8MU9H-A.png)

3. Now we will need to reverse the readonly tuple type, because pipe takes arguments in reverse order compared to compose

![Reverse readonly tuple type](https://cdn-images-1.medium.com/max/2000/1*6VuDvYBfcg9yqbSKsUmChQ.png)

4. Lastly, we need to compute the result of the compose function. Unfortunately, it has to be done explicitly.

![](https://cdn-images-1.medium.com/max/2000/1*s2EO7d6auO084YdpM2bNbA.png)

In the end we can see that this setup correctly infers the type.

![The type is correctly inferred](https://cdn-images-1.medium.com/max/2000/1*ZWroTj4pGL6VJeXcxmstjA.png)

[\*The code outlined above can be found here](https://gist.github.com/kino6052/a8513973f7595b47ef9df49a8c7017d0)\*

### Future Work

Even though it works, this approach is not acceptable because it is way too hacky.

This functionality needs to be available out of the box in TypeScript.

I think if TypeScript enhances recursive types with the ability to pass output type to input of another function, it would allow to correctly implement typing for composeand pipe.

As for the future work, I am planning to go under the hood into the inner workings of the the TypeScript typechecker API, and, if I’m able to figure it out, I might create a PR with a fix to this issue.

Thanks for reading, subscribe, leave a couple of claps and let’s hope this gets fixed soon.
