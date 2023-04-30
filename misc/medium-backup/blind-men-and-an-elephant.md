## “Blind men and an elephant” and the T-shape paradigm

![Something like an elephant](https://cdn-images-1.medium.com/max/2000/1*hFOznxK5xl8VmPWdTY4Lkw.png)

I want to share with you an opinion about which aspect is more important in T-shape skills — broadness or depth — and why it really matters in the modern world. And to assist me with this task, I employ a curious ancient Indian parable about the ability to understand and communicate. This parable is usually referred to as “blind men and an elephant”.

## Introduction

T-shape is a metaphor for having both a broad understanding of wide range of subjects (horizontal bar) and a deep understanding of one subject (vertical bar). There are similar terms referring to the same concept: renaissance man and generalizing specialist.

In an ideal world, you shouldn’t choose between going in the direction of broadness. You know everything about everything. The metaphor for such knowledge would be a box.

Unfortunately, we are not living in an ideal world, and quality knowledge is difficult to acquire as it requires much time and effort. Therefore, we have to make decisions about which direction we want to go.

But how to know which direction to go?

It is generally believed that having just one of the aspects (horizontal or vertical) is not letting you to see the big picture. The consensus seems to be such that having just the horizontal aspect doesn’t allow for good judgement and decision making, while having just the vertical aspect doesn’t let you communicate your ideas clearly across domains.

## Problem

Naturally, a question arises, is there a minimal necessary and sufficient amount of broadness and depth that would let you have the best of the both worlds? And if so, what is it?

## In search of solution

### Blind men and an elephant

The parable tells about a king who wanted to teach budhist monks that it is futile to quarell about the nature of truth (aka the subject they were exploring) as it stems not from much knowledge but inability for them to communicate. In order to do that, he thought of a way to illustrate their situation in a form of a metaphor.

The king assembled a group of men, who were blind from birth, in a room with an elephant. Somehow, the blind men have never experienced an elephant before, so the king asked each of the blind men to come forth and touch a very specific part of the elephant.

- One of the men touched only elephant’s tusks and thought to himself that elephant was a spear.

- Another man touched only elephant’s ears and thought that elephant was a fan.

- Another man touched only elephant’s leg and thought that elephant was a pillar.

- The last man touched only elephant’s tail and thought that elephant was a broom.

Now, after this exercise the king asked the blind men to tell what elephant is. Naturally, one blind man said it was a spear. The other man couldn’t believe his ears and said that wasn’t true at all as elephant is most certainly a fan. All of them were shocked and mad at each other that they were so blatantly wrong, so they started quarelling with each other.

The king was pleased with the result, as it was the exact point he wanted to demonstrate to the monks.

### Analysis

This parable seems to make at least two points:

- Disagreements come from the lack of general (abstract) understanding of the subject.

- Deep understanding without broad understanding is relatively useless (but not vice versa).

### Further illustrations

### Voxelization

To further illustrate how broadness and depth of knowledge are related, I decided to use a technice called voxelization.

Voxelization is a way of describing a 3d shape with the use of cubes. Voxelization is an iterative process:

- First we have just one cube that fits the entire shape

- Then we divide the cube into 8 equal cubes

- We then check which of those 8 cubes intersect the shape and keep only those that intersect

- For the cubes that are left we go back to step 2 (divide each cube into 8 equal cubes)

- Once we reach the desired level of detalization, we end the algorithm

It seems that voxelization is a perfect fit to illustrate the “blind men and an elephant” parable.

Let’s imagine that the stage where we have just one cube, we don’t know what we’re dealing with, it’s an enigma box.

![Voxelization of level 1–3](https://cdn-images-1.medium.com/max/3010/1*Z4uWg15TvmVFoNMrnlgdpg.png)

We continue to the next step, trying to see whether the object becomes clearer, but, alas, it’s all the same.

We continue on to the third level, and now there are less cubes, but still it looks just like a bunch of cubes.

Finally, at the fourth level we get something. But it’s hard to make out what that is.

![Voxelization level 4](https://cdn-images-1.medium.com/max/2554/1*0MIS2O7TKG8DJtDlbc-H5w.png)

However, once we reach level 5, things finally get better. We can tell that it’s a very rudimentary shape of an elephant. An interesting observation is that it took us 5 levels to get to something meaningful.

![Voxelization level 5](https://cdn-images-1.medium.com/max/2620/1*R6XZdxX6vR6NcjhYV03ZFQ.png)

Now at level 6 we can say with confidence that we are dealing with an elephant. It’s not perfect, but already seems like a huge improvement.

![Voxelization level 6](https://cdn-images-1.medium.com/max/2698/1*zR1kVwkkWrpFcvJo1E57mw.png)

Level 7 is even better.

![Voxelization level 7](https://cdn-images-1.medium.com/max/2242/1*QxSy7J_cL6czqhBe3qsXcw.png)

Finally, at level 8 we arrive at the point, where the shape is too clear to bother about further detailing.

![Voxelization level 8](https://cdn-images-1.medium.com/max/2534/1*5AmJi6q4AlfhrD3R-C3Txw.png)

By using this process I want to show that the broadness still does require a lot of work (level 5–6) before it becomes meaningful.

![Metrics for each level](https://cdn-images-1.medium.com/max/2000/1*drn2oGQni88C7Rjq8DjKsA.png)

You can see that at each level, the number of cubes increases exponentially, while the reward (measure of how well is shape is approximated) is exponentially decreasing.

![Exponential increase of # of cubes with level](https://cdn-images-1.medium.com/max/2000/1*AjFmemFPFGd-GuYN5tmSYg.png)

![Exponential decrease of reward with level](https://cdn-images-1.medium.com/max/2000/1*U9B8M4d_Umsb3HDhUh_4_w.png)

### Solution: Tying voxelization into T-shape paradigm

As we mentioned earlier, in the perfect world we wouldn’t need to choose between broadness and depth, but in the real world we do need to.

To translate this problem in the T-shape paradigm, let’s say we, as human beings, only have a set amount of cubes we could use for learning (let’s say the average of these cubes is 5000).

**Now the problem of how to properly assign details to parts of the elephant can be rephrased as an optimization problem where we optimize based on reward and the number of cubes constraints as well as a given task.**

We can see that with 2503 cubes we can already have a shape with level 6 detalization (which is great) and can use the remaining 2497 cubes based on the task we are trying to accomplish.

## Discussion

### What was wrong with the blind men?

The problem with blind men was that the specific details they learned were not meaningful without the broader context.

**Use Case 1**

Let’s say somebody is a specialist of depth 7 & 8 but their breadth of knowledge is of level 4. Such person would have a hard time to communicate outside of his expertise as he doesn’t have a meaningful big picture.

This seems to be the most common case in the modern world, where there is no meaningful understanding of the big picture yet often there is deeper understanding of one particular subject. It also seems to be the exact case with the blind men.

![Breadth 4, depth 7 & 8 (head)](https://cdn-images-1.medium.com/max/2000/1*jisVZn5PbNJAXhUyXvy_sg.png)

![Breadth 4, depth 7 & 8 (hind leg)](https://cdn-images-1.medium.com/max/2000/1*4xn5ONYAEoGBEGy9VrUC2g.png)

**Use Case 2**

If that person had a big picture understanding of level 5, it would already be a significant improvement. Two people with level 5 understanding should have a much easier time communicating and getting on the same page.

![Breadth 5, depth 7 & 8 (head)](https://cdn-images-1.medium.com/max/2000/1*QgMjbEwWvFhkUqgmovZQdw.png)

![Breadth 5, depth 7 & 8 (hind leg)](https://cdn-images-1.medium.com/max/2000/1*bsz5B4JvCoKJ5tfUOftdPg.png)

**Use Case 3**

Big picture understanding of level 6 seems to be optimal in terms of the meaningfulness of big picture and detail. If there are several people with this type of knowledge, they would have a real good time communicating. However, it would be much more difficult for a person with breadt 6 to communicate with a person with breadth 4, as they would have to break the blocks into smaller blocks for them, and that might be very unpleasant and possibly met with resistance.

![Breadth 6, depth 7 & 8 (head)](https://cdn-images-1.medium.com/max/2000/1*Pwg8FQdFhlqIZVigquxlAQ.png)

![Breadth 6, depth 7 & 8 (hind leg)](https://cdn-images-1.medium.com/max/2000/1*lQwLaWWzErAHdmmv7jF3Xw.png)

## Why it matters?

The end result of misunderstanding between blind men as well as monk was quarelling and fighting. In other words their fragmented understanding separated them.

Had they had a better common sense understanding, they should had had an easier time to get on the same page.

In modern world we often find similar situations, where people tend to get syloed in a specific profession with very specific lingo, of which they often take great pride as they consider using very specific jargon to be a sign of great intelligence and skill. In part, that is the case, but this often leads to problems described in the parable. This makes it harder for them to learn something new or adapt to changes. Not to mention the ability to communicate what they do to others.

## How to get good at broadness?

I believe that broad understanding comes from practicing to think in a abstractions (otherwise known as philosophical thinking).

There are great tools that help with this type of thinking:

- games like “codenames”, binary search puzzles, various lateral thinking puzzles like akinator and yes/no puzzles.

- Reading philosophy (especially Plato and Aristotle)

- Math, computer science, and other fundamental sciences

Also it seems that the most important skill is to communicate using common language (not jargon).

Unfortuantely, getting better at broad understanding doesn’t guarantee that it will be appreciated as it can lead to the situation outlined in the Use Case 3.

## Conclusion

To conclude, I hope I was able to convey my opinion that in a T-shaped person, the breadth of understanding is primary and depth is secondary.

There is a quote that is often attributed to Albert Einstein “If you can’t explain it to a six-year-old, then you don’t understand it yourself.”

Therefore, not only broad understanding is real understanding, but it also a source of meaning and the foundation for expertise.

And if many people have the same breadth of understanding, then it becomes broad common sense, which is are vital for healthy communication and collective decision making.

I really want to be a part of community that has broad common sense.
