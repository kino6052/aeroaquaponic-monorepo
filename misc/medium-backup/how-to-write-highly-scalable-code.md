## How to write highly scalable code?

![The tower of Babylon wasn’t very scalable](https://cdn-images-1.medium.com/max/2000/1*rqXUntSYJBOFmR9rJrRArQ.jpeg)

## **Why is it hard to scale?**

One thing that people often miss as they write about scalability is the root cause of why it is hard to scale.

The main reason is that a large system is going to begin falling apart once you start changing it.

Unless, of course, you have 100% test coverage. But the majority of developers would laugh when test coverage is even mentioned, as there is often not even 1% test coverage for a lot of real-world apps.

Maybe a 100% test coverage is a reality for a library, a utility, or a compiler, whose behavior can be mathematically formalized, but for a web app? You must be kidding, right?

We will get back to test coverage later. Right now, let’s go to one level of abstraction higher. The main problem is that the feedback about the correctness needs to be almost instantaneous. Test coverage is one type of feedback. Storybook is a visual type of feedback, often enough to quickly gauge the correctness.

QA testing feedback is yet another type. However, it is not instantaneous. Once you introduce a handover from person to person, you introduce bureaucracy.

## **Examples of hard-to-scale situations**

**Example 1: Non-trivial third-party payment system integration**

To illustrate, imagine you work on an application that has an online store feature, and want to be able to integrate with a third-party payment system. The payment system provides an API that only works when you deploy your code to the cloud. The cloud has a limited set of servers and you have to wait in a queue. To wait in the queue you need to submit a request to your manager. Moreover, you have back-end code and front-end code developers that need to coordinate with each other in order to correctly deploy to that server. There could be a bug on either end that will require the repetition of the entire procedure.

There could be many questions about this setup, but in the real world, such problems happen more often than not.

If there was a proxy for the API that could be set up locally, as well as an easy full-stack local setup, it would be much easier to develop. It would allow writing a test suite that could then be run every time changes are made, thus allowing us to move forward quickly.

**Example 2: Vast fictional universe**

An example outside of the software realm. You are a popular writer writing a science-fiction or a fantasy book series with a vast universe and lore (e.g. Lord of the Rings, Dune, Star Wars etc.) As you write, you need to try to stay consistent so that your story doesn’t collapse on itself accumulating tons of plot holes over time, thus reducing the story’s value. This often can be seen in many Hollywood movies. The reason this happens is that the more complex the story gets the harder it is to track its consistency. Delegating correctness checking to other people doesn’t guarantee correctness, only increases the bureaucracy effect.

If there was an automatic consistency checker, a program that could check for logical consistencies, it would be easy to get instant feedback and quickly go forward with the narrative. Such checkers are, in fact, a reality. For example, various answer set programming and other logic-based tools.

## **Beneficial consequences of instant feedback**

There are numerous benefits that come with such an approach. The number one benefit, in my opinion, is the ability to decouple both the functional subsystems as well as to eliminate unnecessary devops/business processes/bottlenecks.

**Decoupling of the functional subsystems**

When you have sufficient test coverage, you can refactor parts of the code to make them less interdependent, as well as more reusable and rewriteable, etc. This, however, should only come as a consequence of having instant correctness feedback, not before in the form of preconceived architecture. The reason for this is that even a well-thought-through preconceived architecture is also prone to scalability issues (recall the example with the vast fictional universe).

With instant feedback, it is much easier to “divide and conquer”. In other words, it is much easier to break the system into subsystems that can be fine-tuned separately without touching unnecessary parts of the system.

**Elimination of unnecessary devops/business processes/bottlenecks**

Because having instant feedback means that you are going to have a correctly working system most of the time, you eliminate the need to create extra “bureaucratic” steps from development to production.

## **Conclusion**

I hope I was able to demonstrate that **to create something scalable you need instantaneous correctness feedback.**

**Instantaneous feedback can only happen when no bureaucracy is involved.**

Now the follow-up question naturally arises — how to have 100% test coverage in a real-world app?

That’s a material for a follow-up article. Also, it’s partially [covered in this article](https://kirill-novik.medium.com/test-driven-development-and-react-347487c9610a).
