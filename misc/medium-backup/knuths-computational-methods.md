## Knuth’s Computational Methods

I decided to play around with some of the arguments I found in the book “The Art of Computer Programming” by Donald Knuth.

Donald Knuth formally defines computational methods as a quadruple (Q, I,𝛺, f) in the third edition of the first volume of “The Art of Computer Programming” (Chapter 1, page 9)

Where:

- Q — set containing subsets I and 𝛺

- I and 𝛺 - subsets representing inputs and outputs of f

- f — function from Q into itself (aka permutation bijection), where every item in the set pairwise corresponds to another entry in the set.

- *T — subset of *𝛺 _, for which f(o)=o for all o∈ T_

- I — *subset of *𝛺, set of inputs where each input _i_ defines a computational sequence _i*{0},i*{1},i\_{2}_…

- *i\_{0} *is initial input

- _i*{k+1} = f(i*{k}) for k >= 0_

- Computation sequence **terminates in k steps **if i-{k} is the first element in the computational sequence (_i*{0},i*{1},i\_{2}_…*i\_{k}) *that is in T.

Donald Knuth then proceeds by defining how a computational method would look like for the Euclidean algorithm of finding the largest common divisor.

**CM 1**

![](https://cdn-images-1.medium.com/max/2000/0*Y1ga4rP6SZq_cZzR)

I would like to go ahead and try to define other similar computation methods in a similar fashion.

For example, a function that can take two natural numbers and return their sum.

**CM 2**

![](https://cdn-images-1.medium.com/max/2000/0*1bgdLuHuh0FqqqCL)

This is, however, just a single step computational method.

What would a two-step computational method look like? A counter function that counts from 0 to 10 could be used. This method could be defined in a single step, but I decided to show it can be broken down into two separate ones for illustration purposes.

**CM 3**

![](https://cdn-images-1.medium.com/max/2000/0*K-v2PJ39BQPhZ9pH)

Can every computational method be described in this form?

If the input values in the set _I_ can be proven to work with a simple induction, then it must hold that, as long as the steps to reach the pointwise fixed output could also be shown with another induction to hold for every input, the method can be described in such form.

I am not going to, however, show those inductions in this article, only say that I will show in the later articles that computer programs can be represented in the format of such a computation method.
