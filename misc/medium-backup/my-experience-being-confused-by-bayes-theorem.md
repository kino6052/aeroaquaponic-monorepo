## My Experience of Being Confused by Bayes’ Theorem

There is probably no other concept in statistics and probability that is of the same importance as Bayes’ Theorem.

![](https://cdn-images-1.medium.com/max/2000/0*2O3E2wvni9XYdHCF.png)

A seemingly simple equation that many of us see so often we stop question it and take it as obvious.

However, seeing time and time again how this formula is derived, the word “obvious” doesn’t come to mind.

I would like to share my experience of being confused about this concept, and how I resolved my confusion. I hope that this might help those who have gone or are going through the same experience.

### The Foundation of the Confusion

What I like about math is that it is generally very consistent. First, you learn some very simple rules and definitions, and then, with some trial and error, you can derive something more complicated from the basics. Meaning that you can actually generate knowledge yourself, which is really cool.

However, sometimes even the foundations can be very confusing. I made the mistake of wanting to learn about the theorem from nothing other than the thinking process of Thomas Beyes himself (or of his friend who was a fellow of Royal Society) in his work [“An Essay Toward Solving a Problem in the Doctrine of Chances”](https://royalsocietypublishing.org/doi/pdf/10.1098/rstl.1763.0053).

To my surprise, neither terminology nor the equations I found in this work hinted at the Bayes rule. The essay was very brief. Most of the time I was guessing what description corresponded to joint, marginal, or conditional probabilities. I can’t say I understood much. Maybe even nothing at all. But at least I was able to make sure that it wasn’t only the foundations as they explained today that I didn’t understand, but also the way they were originally explained.

Modern terms like “experiment”, “hypothesis”, “degree of belief”, “observation”, “prior knowledge”, “evidence” and “posterior” are so confusing to me. Not that I don’t understand the meaning of these words, but when it comes to probabilities, having an extra connotation contributes to obscurity rather than clarity.

### Overcoming Confusion

In order to overcome confusion, I had to reestablish foundations based on the terms I understand.

Luckily, there are only a handful of concepts required to be able to derive this equation. These concepts are:

- Dependency

- Joint Probability

- Marginal Probability

- Conditional Probability

_NOTE: Despite its usefulness, I don’t include “Random variable” in the list because, and I hope to demonstrate this, it is not necessary._

### Dependency

**Dependency is probably the most important concept of them all. **Without the concept of dependency, Bayes’s theorem is not useful and equivalent to saying that the probability of a certain outcome is equal to the probability of that certain outcome. But I’m getting ahead of myself.

Even when it comes to Bayesian probability, to myself, I define probability as a ratio of a specific outcome to all outcomes of some process.

*Spoiler alert, I’m going to be using the coin toss analogy. *The coin toss process is defined by two outcomes: heads or tails. Even though, the total outcomes are just two — heads or tails, it doesn’t mean that all outcomes can’t have a certain ratio. Plus we can have 2 or 3 or 4 or any number of total outcomes, thus it is still a useful definition.

Now, dependency, and therefore the Bayes’ theorem, only makes sense for two or more processes (e.g. two or more coins), and cannot be applied to one process (e.g. one coin).

Before explaining the concept of dependency, it is much more important to understand what happens when there is no dependency between processes. Let’s say each coin has only two possible outcomes (H and T). Now if we are to find all possible outcomes for these two processes it would be:

H1H2, H1T2, T1H2, T1T2

So, four possible outcomes. Notice that when H1, the number of all outcomes for C2 are still two — H1H2, H1T2. Same for T1 — T1H2, T1T2. It is also true for another coin. When H2, C1 still has two possible outcomes — H1H2 and T1H2.

Consider this made-up scenario.

H1**H2**, H1**H2**, T1H2, T1T2

Also four possible outcomes, but this time when H1, C2 has only one outcome: H2. Why? No idea, as I said, this is just a made-up scenario, but this shows that outcome of one coin affects another.

This second scenario means that two processes are **dependent.**

### **Joint Probability**

Joint probability (e.g. P(H1, H2)=1/4) is a probability of a certain outcome from one process and a certain outcome from another process in the context of the possible outcomes of both processes.

### Marginal Probability

Marginal probability (e.g. P(H1)=2/4) is a probability of a certain outcome from one process in the context of the possible outcomes of both processes.

### Conditional Probability

Conditional probability (e.g. P(H1|H2)) is a probability of a certain outcome from one process in the context of the marginal probability of the second.

The outcome where H1 and H2 in relation to the P(H2) can be captured by this equation:

P(H1|H2) = P(H1,H2)/P(H2) = 2/3 = 66.(6)%

Now if we wanted to know P(H2|H1), then we would get:

P(H2|H1) = P(H2,H1)/P(H1) = 2/2 = 100%

Interestingly, P(H1|H2) = P(H1,H2)/P(H2) can be rewritten as:

P(H1,H2) = P(H1|H2)P(H2),

but so can be rewritten P(H2|H1) as:

P(H2,H1) = P(H2|H1)P(H1)

### The Moment of Truth

Interestingly, P(H1, H2) is the same as P(H2, H1) by definition, which means that:

P(H1,H2) = P(H2,H1) or P(H1|H2)P(H2) = P(H2|H1)P(H1).

**Rearranging the terms gives us: P(H1|H2) = P(H2|H1)P(H1)/P(H2), which is Bayes’ theorem.**

### Conclusion

This is how I explain Bayes’ theorem to myself. To me, this explanation is clear and correct, and the only thing that I have to commit to memory is the concept of dependency. I am very happy that at the end of the day, despite all of the confusion that this theorem has caused me, I can clearly understand it and build on top of it just like I do with the rest of my mathematical knowledge! 🎉🎉🎉
