## Dissecting My Confusion: Support-Vector Machine

I don’t know about you, but I personally find that in science, terminology that involves colloquialisms isn’t really making things clearer, and rather causes confusion.

Think about examples from biology as an example with such terms as knock-out, knock-down, knock-in, junk DNA and the like. You can find lots upon lots of similar examples if you’re patient enough.

Similarly, this happens even more abundantly in Computer Science and related fields, and what I would like to focus on in this article is the concept of SVM, to play with it, and examine the confusion that it has caused in me, and hopefully use it as means to clarifying the concept.

First of all, SVM is an absolutely confusing term. It is really hard for me to believe that the word “machine” was used to describe this algorithm. Here is what comes to mind at this word :

![Machine](https://cdn-images-1.medium.com/max/2000/0*Kfh1KsRXy_DZvxSW.gif)

Why didn’t they choose “support-vectors assisted classification” with support-vectors being one hyphenated word? Just why??? Would have made a world of difference…

This article does a pretty good job at explaining the math behind SVM: [https://medium.com/@sathvikchiramana/svm-dual-formulation-7535caa84f17](https://medium.com/@sathvikchiramana/svm-dual-formulation-7535caa84f17)

SVM is a constraint optimization problem. Here is the definition of the objective.

![SVM Objective](https://cdn-images-1.medium.com/max/2000/1*A2R9BNI7RhGHTqxAuIkYbw.png)

![SVM Lagrangian function](https://cdn-images-1.medium.com/max/2000/1*IcIbkBE_W-C63OQg-zMfdg.png)

Which is equivalent to the dual form.

![SVM Lagrangian function in dual form](https://cdn-images-1.medium.com/max/2000/1*bGAUqeAubriq_PTkHTuoSQ.png)

It might not be so obvious looking at the objective, but the bottom line of this optimization problem is to find the optimal Lagrange multiplier (a).

And this is actually done through *gradient descent, *just like with deep learning. You can find out more here: [https://www.youtube.com/watch?v=UX0f9BNBcsY](https://www.youtube.com/watch?v=UX0f9BNBcsY)

Ok, so far so good. Even though it requires pretty serious mathematical knowledge, I would still argue that it is pretty straightforward when compared to the choice of terminology.

Now, let’s talk about Kernel functions. And sorry for complaining so much, but I don’t understand why they are called “kernel” functions. Another term for kernel function could be [\*transformation nucleus](https://en.wikipedia.org/wiki/Integral_transform) function*, or *transformation core function\*, which makes infinitely much more sense because the word “transformation” is the keyword here.

So the problem now becomes really about optimizing the function with some transformations applied that makes it possible to separate data with a line, albeit in more dimensions. As a side note, I find it really cool to think that an equivalent of a line in 1D space is a dot, in 3D space — a plane, in 4D — a 3d space, in 5D — 4D space, and so on.

However, I find it pretty hard to imagine how points in one space, can be linearly separated in a more-dimensional space, and I find the following example very helpful in this regard.

Let’s say that the values of [-3,-2, 2, 3] of x correspond to the label of 1, and [-1,1] correspond to the label of -1. You will see where I’m going with this in a moment. Now let’s transform them into two dimensions according to this rule:

![](https://cdn-images-1.medium.com/max/2000/1*hiOg9wz_MBbbB08Qtl3A9w.png)

Now the points become (-3,9), (-2, 4), (2, 4), (3, 9) and (1, 1) and (-1, 1)

![](https://cdn-images-1.medium.com/max/2000/1*74yDE5DMdwm0ITnpRE5lYg.png)

Clearly, the line where the second dimension in the space is equal to 2 would be able to separate these points correctly.

Now, let’s try to transform this line into the original 1D space according to the reverse rule.

![](https://cdn-images-1.medium.com/max/2000/1*l9EkKnM1MELxawyixTIv-g.png)

It will give us -√2 and √2.

Essentially, this will be just two dots on the line, which can be visualized as follows:

![](https://cdn-images-1.medium.com/max/2000/1*45xJPu4Ozok-B5z9S0sEQw.png)

Here two dots correspond to the line in 2D space, which is really interesting and almost mind-blowing.

So, going back to the Kernel function and the term “Kernel trick” that I really don’t like. Just like I said at the beginning, it usually takes away from clarity every time colloquialisms are used in scientific terminology.

“Kernel trick” explained really well in this article: [https://medium.com/@zxr.nju/what-is-the-kernel-trick-why-is-it-important-98a98db0961d](https://medium.com/@zxr.nju/what-is-the-kernel-trick-why-is-it-important-98a98db0961d)

However, I want to take a step back and say that the Kernel trick is another way of saying that instead of transforming data to higher dimensions using a mapping function and then finding dot products, we can just compute the transformation Kernel function, which can greatly simplify the calculation. To my mind, “kernel simplification” would have been a better choice of terminology.

This is pretty much it, and in conclusion, I would like to say that even though math behind SVM is pretty advanced, it is not so much the math, but the certain choice of terminology that caused me a great deal of confusion.

I feel that analyzing my confusion has helped me to better grasp the concept, and I hope that you found it useful too. If that is the case, then please leave a couple of claps, and subscribe. Thanks
