## Consider Studying Machine Learning Top-Down Instead of Bottom-up

![](https://cdn-images-1.medium.com/max/2560/0*UI1MdJMWhKkA86BV.gif)

There is a certain pattern I’ve noticed in how machine learning, and deep learning specifically, is usually taught. It’s bottom-up, so you start with some prerequisite topics, trying to guess what it has to do with the topic of interest, and, usually, it takes all the way up to the middle of the course, or a book, until you begin to understand the significance of these introductory topics.

However, I would like to argue that structuring content like that doesn’t contribute to clarity and rather acts in the opposite way. So I would like to argue that a top-down approach adds significantly more clarity when you study machine learning concepts (and probably any other subject).

Since deep learning remains the hottest topic in machine learning, I would probably use it for a case study.

### Case Study: Deep Learning

First of all, **_deep learning _**is already a confusing term because it contains very little information, and the word “deep” doesn’t contribute to clarity either. A better attempt at that would be to call it the **_training of multi-layer neural networks._**

Still, for somebody unfamiliar with neural networks, it would still be pretty confusing. This term doesn’t give much idea about the motivation or purpose behind the concept.

### Step 1: Problem We Are Trying to Solve a.k.a. Motivation

Let’s say we have a list where every entry in it is an image of an animal and its name. For example: *[(pixels_1, “elephant”), (pixels_2, “zebra”), (pixels_3, “cat”), …, (pixels_n, “bird”)]. *We want to use this data to be able to guess animals if we have new images outside of the list. Essentially we want to have a function that takes an image and gives back the animal’s name. (e.g. _function(pixels_1000) => “dog”_). Can we guess this function? And if so, how?

### Step 2: Naive/Abstract Solution

The most counterproductive and impractical way to do this would be to just add these entries manually. If I give it *pixels_1, *it will give me “elephant” back, and if I give it something new, I will need to manually add that entry (_pixels_new_, “turtle”). So I would need to do that for every new image, and this is absolutely impractical and doesn’t provide insight into the patterns hidden in the data.

### Step 3: How the Concept of Interest Solves the Problem

**And here is the moment of truth. A neural network is a function. **It takes some inputs and gives some outputs. (e.g. *function(some_input) => some_output) *However, this function can also be adjusted. This means that if we adjust it one way, it will produce outputs that are closer to what we want, and if we adjust it in another way, it will produce outputs that are farther from what we want.

Therefore “deep learning” can be termed as **“automatic adjustment/optimization of a function that takes certain data from which it gives us desired results”**.

### Step 4 — Step N: Unboxing

The problem here is that the definition above is also true of other algorithms, like Support Vector Machine (SVM), as well as linear and non-linear regressions. The main difference between all of them is both the kind of outputs that can be produced as well as what is going on under the hood. But, conceptually, they fall under the above definition.

Given this ambiguity, it would be better to update the definition for deep learning to be **“automatic adjustment of a function, _consisting of perceptrons and having more than three levels of composition_, that takes certain data from which it gives us desired results.”**

We still may not know what perceptron is, or what is meant by the levels of composition, but as we are slowly unboxing the concept, we gradually add the need for more concrete concepts, which is hopefully going to keep us digging deeper till we get the amount of clarity we need about the subject. A process like this should feel more like an investigation, as opposed to a passive ride from point A to point B.

And once we get to the bottom, the big picture will be there in our minds to allow us better absorb the lower-level concepts.

### Conclusion

This is a rather short article, as my intention wasn’t to explain deep learning but to propose an approach to a more engaged and meaningful learning experience compared to the majority of content currently available.

Personally, I will keep this approach in mind as I am writing articles about machine learning in the future, and, hopefully, will learn a lot from this experience.
