# Computational Prime Number Framework

## Introduction

Here I present a conceptual framework that I call computational prime number framework. It is not the classical number theoretic framework, and therefore I don't claim to have proven anything within the standard framework. However, my adaptation is a fun thought experiment that allowed me to experiment with the infinitude arguments of twin primes and have fun in the mean time. It was an interesting experiment that helped me to look at prime gaps from a novel standpoint and it allowed to have prooves for longstanding conjectures only valid within the confines of my framework.

When I initially believed I had proven this conjecture, it was disheartening to discover that my work wasn't taken seriously by the mathematical community. I struggled to understand why mathematics—something I viewed as universally accessible to all minds—seemed restricted to an elite few. Isn't mathematics supposed to be a universal language available to anyone capable of logical thought?

Eventually, I realized my mistake: I had unconsciously assumed I was working within classical number theory, when in fact I had developed a proof within my own consistent conceptual framework. This crucial distinction had eluded me. I had forgotten that mathematics, like philosophy and other disciplines, operates within established frameworks with specific rules and conventions.

These frameworks began as thought experiments and explorations of human reasoning, but evolved into rigorous structures somewhat detached from their intuitive origins. While this evolution makes sense for formal advancement, we should remember that mathematics ultimately exists in human minds, not just in formal systems. It remains important to examine our foundational thinking and occasionally revisit first principles, ensuring we don't lose sight of what's truly fundamental in our pursuit of mathematical truth.

This article will not use formal mathematical notation, but rather present philosophical arguments illustrated with Python code examples. I believe this approach makes the reasoning more accessible and transparent to anyone willing to invest a little time to understand the argument. By combining natural language explanations with executable code, readers can both follow the logical flow and verify the computational results for themselves.

## Twin Prime Sieve: A Computational Redefinition (Refined with Python)

This article redefines primes and twin primes as results of an iterative computation process. The following Python code and comments aim to clarify the concepts without relying on traditional definitions of primes or twin primes. Instead, we reinterpret them as emergent properties of a systematic sifting mechanism.

The sieve function works as follows: Given a set A of natural numbers, the function S (sieve) produces a set B that excludes 1 and any multiples of the numbers in A.

For example:

- S({2}) yields {2, 3, 5, 7, 9, 11, 13, 15, …}
- S({3}) yields {2, 3, 4, 5, 7, 8, 10, 11, 13, 14, …}
- S({2, 3}) yields {2, 3, 5, 7, 11, 13, …}

We use this sifting process to filter out composite numbers. The Python code below implements the sieve function:

```
def sieve(A, N):
    """
    Removes multiples of the numbers in A from the list N.

    Parameters:
      A: List of known primes.
      N: List of numbers to filter (the first element is skipped because it is 1).

    Returns:
      A list of numbers from N that are not divisible by any element in A.
    """
    return list(filter(lambda n: all(n % a != 0 for a in A), N[1:]))
```

### Generating Primes via an Iterative Sifting Process

We then generate primes iteratively using the sieve function. Starting with an initial list A = [2], we repeatedly pick the smallest number from the filtered list as the next prime and update the candidates by removing its multiples.

```
def sifting_process(iterations, sieve, A=[2], max_num=100):
    """
    Generates primes via an iterative sieve process.

    Parameters:
      iterations: Number of iterations to perform.
      sieve: The sieve function used to filter numbers.
      A: The initial list of primes (default is [2]).
      max_num: The upper limit of numbers to consider (default is 100).

    Returns:
      A list of primes obtained after the specified number of iterations.
    """
    N = list(range(1, max_num))
    current_primes = A.copy()  # Copy the initial list to prevent modifying it directly
    while iterations > 0 and len(N) > 1:
        N = sieve(current_primes, N)  # Filter out multiples of known primes
        current_primes.append(N[0])   # Add the smallest remaining candidate as the next prime
        iterations -= 1
    return current_primes
```

## Euclid’s Proof

Now, to prove that there exist infinitely many primes using the definition of the sieve function, I need to establish that the sifting process never terminates. This requires demonstrating that no matter how many primes we've already identified (i.e., how large our set A becomes), there will always remain infinitely many candidates in our filtered set.

More formally, I need to show that for any finite set of primes A = {p₁, p₂, ..., pₙ}, the cardinality of the sifted set B remains infinite (|B| = ℵ₀). This would prove that the process of identifying new primes continues indefinitely, confirming that there are infinitely many primes.

In our framework:

- At the first step (SP(1)) with A = {2}, filtering out multiples of 2 leaves numbers such as 3 and, in general, all odd numbers (2n+1)—an infinite set.
- At the next step (SP(2)) with A = {2, 3}, the set includes numbers like 2×3 + 1, and more broadly, infinitely many numbers of the form 6n+1.

Assume that after k steps we have SP(k) = S({2, 3, …, pₖ}). Even after an additional iteration to form SP(k+1), the set remains infinite because the process only eliminates finitely many numbers from an initially infinite list.

This means that A will keep increasing without bound, there will always be a smallest number from the filtered ones to add.

Here is how to show this infinite process as a recursive function:

```python
  def recursive_sieve(A, FILTERED_SET = N) { # N is set of natural numbers (we know that it is infinite, but it is finite in Python)
    result = filter(A, FILTERED_SET)
    smallest_filtered = result[0]
    A.append(smallest_filtered);

    return recursive_sieve(A, FILTERED_SET)
  }
```

Interestingly, I observed that both p₁×p₂×…×pₖ + 1 and p₁×p₂×…×pₖ - 1 appear among the remaining numbers. This observation provided further insight and motivated the next phase of exploration in this computational framework.
