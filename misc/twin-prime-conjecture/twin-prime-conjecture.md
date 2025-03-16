# Computational Prime Number Framework

## Introduction

Here I present a conceptual framework that I call computational prime number framework. It is not the classical number theoretic framework, and therefore I don't claim to have proven anything within the standard framework. However, my adaptation is a fun thought experiment that allowed me to experiment with the infinitude arguments of twin primes and have fun in the mean time. It was an interesting experiment that helped me to look at prime gaps from a novel standpoint and it allowed to have prooves for longstanding conjectures only valid within the confines of my framework.

When I initially believed I had proven this conjecture, it was disheartening to discover that my work wasn't taken seriously by the mathematical community. I struggled to understand why mathematics—something I viewed as universally accessible to all minds—seemed restricted to an elite few. Isn't mathematics supposed to be a universal language available to anyone capable of logical thought?

Eventually, I realized my mistake: I had unconsciously assumed I was working within classical number theory, when in fact I had developed a proof within my own consistent conceptual framework. This crucial distinction had eluded me. I had forgotten that mathematics, like philosophy and other disciplines, operates within established frameworks with specific rules and conventions.

These frameworks began as thought experiments and explorations of human reasoning, but evolved into rigorous structures somewhat detached from their intuitive origins. While this evolution makes sense for formal advancement, we should remember that mathematics ultimately exists in human minds, not just in formal systems. It remains important to examine our foundational thinking and occasionally revisit first principles, ensuring we don't lose sight of what's truly fundamental in our pursuit of mathematical truth.

This article will not use formal mathematical notation, but rather present philosophical arguments illustrated with Python code examples. I believe this approach makes the reasoning more accessible and transparent to anyone willing to invest a little time to understand the argument. By combining natural language explanations with executable code, readers can both follow the logical flow and verify the computational results for themselves.

## Twin Prime Sieve: A Computational Redefinition (Refined with Python)

This article redefines primes and twin primes as results of an iterative computation process. The following Python code and comments aim to clarify the concepts without relying on traditional definitions of primes or twin primes. Instead, we reinterpret them as emergent properties of a systematic sifting mechanism.

Sieve is a function from a set A of some natural numbers onto the set B of all natural numbers excluding both 1 and the multiples of the numbers in set A.

Definition 1: Sieve
Examples:

S({2}) = {2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, … }

S({3}) = {2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 16, … }

S({2, 3}) = {2, 3, 5, 7, 11, 13, … }

We use the sieve process to iteratively filter out composite numbers. The function sieve takes a list of known primes (according to our defin) (A) and a range of numbers (N) and removes any multiples of elements in A.

```
def sieve(A, N):
    """
    Filters out multiples of known primes A from the list N.
    A: List of known primes
    N: Range of numbers to filter
    Returns: Filtered list of potential candidates
    """
    return list(filter(lambda n: all(n % a != 0 for a in A), N[1:]))
```

### Generating Primes via an Iterative Sifting Process

Using the sieve function, we construct primes iteratively. Starting with an initial set A = [2], we repeatedly identify the smallest remaining candidate in N as a prime, add it to A, and filter the rest.

```
def sifting_process(n, sieve, A=[2], num=100):
    """
    Iteratively generates primes using a sieve process.
    n: Number of iterations (steps in the sifting process)
    sieve: Sieve function to filter candidates
    A: Initial set of primes
    num: Upper limit for the range of numbers to consider
    Returns: List of primes generated after n iterations
    """
    N = list(range(1, num))
    next_A = A  # Initialize with known primes
    while n > 0 and len(N) > 1:
        N = sieve(next_A, N)  # Filter numbers using the sieve
        next_A.append(N[0])  # Add the smallest candidate as the next prime
        n -= 1  # Decrement iterations
    return next_A
```

## Euclid’s Proof

Now, to prove that there exist infinitely many primes using the definition of the sieve function I need to show that no matter how big n gets, the size (the cardinality of B) will remain infinite (ℵ_0), meaning that there are always infinite unsifted elements no matter how much sifting we do (in other words, the process of sieving will be infinite)

Step 1, SP(1), where A = {2} will give a set without the multiples of 2. Analytically, we can show that it must not be empty because it will contain 2+1=3 because it cannot be divided without remainder by 2, and also that, in fact, any natural number of form 2n+1, since natural numbers are closed under multiplication and addition, of which there is an infinite number, also cannot be divided without remainder.

SP(2)=S({2, 3}) will give a set that will contain 2\*3+1, which cannot be divided without a remainder by 2 or 3, and there also will be infinitely many numbers of form 6n+1.

NOTE: Important to note, that 6n+1 are not guaranteed to be the only numbers that will remain, but they still serve as an analytical guarantee that there will be infinitely many numbers in the resulting set.

Now, let’s say that this process works up till SP(k)=S({2, 3, …, p_k}), where the next step SP(k+1) will not result in a set with infinitely many numbers.

Sifting Process for k+1
This will still give us a set with infinite numbers because we obtained an infinite set from SP(k) and we can show that we are still guaranteed that there will remain infinitely many numbers of the form:

Numbers in SP(k+1)
Therefore, we can conclude that there will always remain numbers, no matter how far in the sifting process we get.

As I was carrying out this proof, I noticed that not only n*p1*…*p_n+1 is guaranteed to be inside the resulting set, but also the n*p1*…*p_n — 1, which was very exciting, as it lead me to the next part.
