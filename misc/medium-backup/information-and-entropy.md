## Information and Entropy

The point is to understand why we define information in such a strange way.

Why outcomes of less probability correspond to more information?

The reason for that is because we need more states to encode an outcome of a lesser probability, compared to that of a higher one. This is because we have to be more specific about what outcome out of possible outcomes has occurred.

An outcome with a probability 1/4 corresponds to 1 out of 4 possible outcomes, but which “one”? What outcome did we get? If we ask how many bits can encode 4 states, the answer would be 2.

To take it one step further, let’s say there is an outcome with the probability of 3/4. Now after we observe an outcome and we are interested in the outcome with the probability of 3/4, we need to know which “three”? Or if we divide both numerator and denominator by 3, we get 1/1.(3), so we have to answer which “one”? Which of the outcomes we get? 1.(3) outcomes isn’t a very pretty number. But I still think it makes sense because it asks which “three” of the outcomes: either the first full three or the remainder. And that is a bit less than one bit.

**Information is how many bits we need to encode outcomes given a random variable**

**Entropy is just the average of bits needed for outcome encoding for all values of a random variable.**

- 1/4*log(1/4)-3/4*log(3/4)=0.81, which is essentially how many bits would be needed for an event with probability 1/2 ^ 0.81 = 1/1.75

Why is it useful to know how many bits are needed to encode an event with average probability? Why is it useful when comparing distributions?

Mainly because it deals with logs, and logs have nicer properties for smaller probabilities. But is it necessary? No.
