## Attempt to Loosely Define Software Development

Here is an iteration of a few attempts to define what software development aka programming is. From broad to narrow.

- Software development is an activity.

- Software development is an activity with a goal.

- Software development is an activity with the goal of satisfaction of a set of constraints.

- Software development is an activity that involves providing a description with the goal of satisfaction of a set of constraints.

- Software development is an activity that involves providing a computation with the goal of satisfaction of a set of constraints.

To avoid further expanding this iteratively I will just provide the terms aside from the definition.

Here, the computation can be considered as Knuth’s computational method. It is a description of a sequence of operations with a certain result that, for the sake of argument, doesn’t have to be pointwise fixed.

The constraints to satisfy are the following.

- The computation has to be **correct**. Meaning that for the terminating computation methods some of their input-output pairs must conform to all of our requirements.

- The computation has to be **performant**. Meaning we need to strive for the minimal possible sequence of operations for non-io-bound operations. And for the least amount of time for the io-bound operations.

Note that I haven’t mentioned computers here. The reason for that is that computers are not necessary for programming. This may seem ridiculous, but programming can be done on paper or in your head. Of course, it is extremely inefficient, but I think it is important to keep this in mind.

Because computation is a description that requires mind, and a computer being optional, then it must follow that if expressed correctly, it can reduce confusion and effort to read and update it. Therefore, here are additional constraints that computation must have.

- The computation has to be **context-minimalist.** The computation has to require the minimum possible amount of context about computation. Meaning that there is no need to keep more than a certain limit of entities at once in mind to reason about computation.

- The computation has to be **effectively modifiable**. Meaning that for any change in the set of input-output pairs we need to strive for a minimum possible required set of changes to the computational methods involved.

I am not sure if I chose the correct terms for the latter two constraints. These two constraints are directly related to writability, readability, and extensibility/scalability. But I believe that this is a good starting point for analytical deduction of what software development is and how to approach the satisfaction of the constraints that it requires.
