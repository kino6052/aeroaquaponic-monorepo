## The infinitude of twin primes with the help of ChatGPT and Coq

![](https://cdn-images-1.medium.com/max/2000/0*P4jisLQvU92Q8cB1)

[This is an elaboration on my previous article.](https://medium.com/math-simplified/twin-prime-conjecture-proof-ef4b5c2c65e0)

### Plain English Proof

**Step 1: An indivisible pair**

Suppose we have a set of prime numbers P = {p1, p2, p3, …, pn}.

We want to prove that if we multiply all the numbers in the set together and then multiply it by some integer m, and create a pair by subtracting 1 and adding 1, the resulting pair of numbers (t1, t2) will not be divisible by any of the numbers in the set P.

To prove this, we can use contradiction. Suppose that there exists some prime number pi in the set P such that either t1 or t2 is divisible by pi. This means that there exists some integer k such that t1 = k _ pi — 1 or t2 = k _ pi+1.

Substituting the definition of t1 and t2, we have:

k _ pi = m _ (p1 _ p2 _ p3 _ … _ pi _ … _ pn) — 1

or

k _ pi = m _ (p1 _ p2 _ p3 _ … _ pi _ … _ pn) + 1

We can now divide both sides by pi.

k = m _ (p1 _ p2 _ p3 _ … \* pn) — (1/pi)

or

k = m _ (p1 _ p2 _ p3 _ … \* pn) + (1/pi)

because pi is greater than 1, (1/pi) will be a fraction that is less than one, thus in both cases k would not be an integer.

Therefore, our assumption that either t1 or t2 is divisible by pi leads to a contradiction. Since our assumption is false, we can conclude that the pair (t1, t2) is not divisible by any of the numbers in the set P.

**Step 2: Multitude of indivisible pairs**

Now, we want to prove that there is no largest pair (t1, t2). To do this, we can consider an infinite sequence of integers m that increases without bound. For each value of m, we can calculate t1 as m _ (p1 _ p2 _ p3 _ … _ pn) — 1 and t2 as m _ (p1 _ p2 _ p3 _ … _ pn) + 1.

Since m increases without bound, the values of t1 and t2 will also increase without bound. This means that there is no largest pair (t1, t2), as we can always find a larger pair by increasing the value of m.

Therefore, we have proven that the resulting pair of numbers (t1, t2) is not divisible by any of the numbers in the set P, and that there is no largest pair (t1, t2).

**Step 3: Guarantees there will be primes**

We need to guarantee that there is going to be at least one pair where both t1 and t2 are prime numbers in the multitude of the pairs generated for every set P.

We need this guarantee because if we keep adding primes to set P, there could be a situation either t1 or t2 or both are divisible by one of the new numbers for all pairs.

To prove that this situation can’t happen, we can use contradiction. Suppose that the pairs

m _ (p1 _ p2 _ p3 _ … \* pn) ±1

that we generated for a set P will all become divisible by some prime numbers as we keep adding primes to P up to some prime pk. Let’s call the set with prime numbers up to m _ (p1 _ p2 _ p3 _ … _ pn) as P’. P’ = m _ (p1 _ p2 _ … _ pn _ … _ pk), where pk < m _ (p1 _ p2 _ p3 _ … _ pn).

However, we can find a pair (t1, t2) that will not be divisible by any number in P’. m _ (p1 _ p2 _ p3 _ … _ pn) _ k ± 1, where k is a product (pn _ … _ pk).

Therefore, our assumption — that there could be a situation where none of the resulting pairs is a prime pair — is false.

In fact, we are guaranteed to have infinitely many such indivisible pairs for any P.

We can also update our P to be P’ and do the argument over, thus guaranteeing that for every such step we are going to generate a unique pair of (t1, t2), and we can do this infinitely.

**Step 4: When P is a set of all prime numbers**

Now, we want to prove that no matter how large the set of primes gets, there will never be the largest pair (t1, t2) that is guaranteed to be a prime pair.

Since there is an infinite number of primes, and since we have proven that for a product of primes there exist no largest (t1, t2), there product of these prime numbers will increase without bound.

This proves that there exist infinitely many pairs (t1, t2) as there exist no largest such pair no matter how big the set of prime numbers P gets.

### Coq Definitions

{% gist https://gist.github.com/kino6052/c8cd21a8b7f7b38fd31f98fdf646d9a2.js %}
