## Test-driven Development and React

Sandbox with the result here: [https://codesandbox.io/s/tdd-and-react-4g98i](https://codesandbox.io/s/tdd-and-react-4g98i)

![TDD ilustration by Denise from [https://quii.gitbook.io/](https://quii.gitbook.io/)](https://cdn-images-1.medium.com/max/2000/0*tihKTRLNw-JrQUqi.png)

## Introduction

I like React a lot, except for maybe one thing — it’s often super laborious to test thoroughly. I am not even talking about writing it in a test-driven way. It’s no fun.

However, I don’t give up easily. I really like testing my code. At work, almost nothing gets me more pumped than when I see the green color in my terminal. Well, that and the paycheck.

In this article, I am going to share with you an approach to doing application development with React in a test-driven fashion — a truly powerful, yet neglected art. Think of it as a unicorn of the programming paradigms — it makes a lot of sense, yet doesn’t exist in real life. Or does it?

## Thinking in React

I share [the way of thinking that React proposes](https://reactjs.org/docs/thinking-in-react.html):

1.  Break the UI into a component hierarchy

2.  Build a static version in React

3.  Identify the minimal, but complete representation of UI state

I’m not including step four because the state will live outside of React, and will be passed to it through props.

There is another step for adding the inverse data flow that I’m going to exclude. I’ve always had mixed feelings about it. On one hand, I realize that this step is necessary, however, on the other hand, I’ve always felt as if there was a better way to do this. Namely, up to this point, we had elegant views with data primitives passed around, and now we have our code bloating with callbacks and closures.

Now, from the elegant view code, this was turned into not-so-elegant spaghetti code.

But what if I could take my inverse data flow outside React, and keep React one-directional data flow as it should be?

## Introducing the EventWrapper component

{% gist https://gist.github.com/kino6052/65be8a6a239005cea0a134fd6024b8b5.js %}
Now we can safely take the data flow inversion outside React by subscribing to the EventSubject.

**\*NOTE: **This is just an example of such a wrapper. It can be extended and optimized to suit your needs. For this article, this is a good enough representation.\*

Now, all we have to do when a component should react to a user’s input is to wrap it in EventWrapper and give it a unique id.

    <EventWrapper id=”input-01">
       <input />
    </EventWrapper>

## State

Now that we have decoupled event processing from React, we can get to the fun part.

Our events are now going to arrive through the EventSubject in a form like:

    [“change”, “input-01”, “test”]
    [“click”, “input-01”, “”]
    [“focus”, “input-01”, “”]

In order to save time, let’s assume that we have done the first three steps according to the [“thinking in React” section of the documentation](https://reactjs.org/docs/thinking-in-react.html).

This means that we already know how our state looks and we know what inputs should update it. These three steps don’t require a TDD approach. However, the result can be tested by passing various states at the top component and see if it updates the way it should.

This is how the state is going to look like:
{% gist https://gist.github.com/kino6052/6cb6cfb6a55ad7238ba0242029c32fb2.js %}
The reason I added the _“productsToDisplay”_ field is because it allows to take the decision-making about what to display from React to the simple JSON object that is much easier to test.

## What about TDD?

Now we know what state our app is expecting. We know what events are going to be triggered. This means that we can represent the app as a pure function.

    const newState = reduce(event, state);

Here “reduce” is going to be an abstraction of our application logic. All of the application’s logic is going to live inside of it.

The coolest aspect about it is that, unlike with Redux, our application isn’t a function from “actions” to “state”, but a function from IO to a new state. This is how applications really work. It is the IO, like user inputs, as well as device and network responses, that change the app state.

Because we can represent our app as a pure function, we can test it with ease, since the only thing we need to know about the application is the input and the output, and nothing about the internal logic.

## TDD Example

## Red phase

{% gist https://gist.github.com/kino6052/1c120cd02e8a45cbaa2f802a58397f4e.js %}

## Green phase

This is the first failing test that we write.

We have to make it pass.
{% gist https://gist.github.com/kino6052/f9502780cac2dd721813558fccd7dbc6.js %}

## Blue phase (Optional)

Time for refactoring. This is the **coolest thing about TDD**. It allows you to not worry about code architecture, and give you all the freedom to **choose the architecture that suits your needs as long as your tests pass**. Yes, the underlying logic of reduce can be anything. Doesn’t have to be pure functional programming. Can be object-oriented. But as far as _“reduce”_ is concerned, the abstraction it gives is a pure function.

I hope to write an article about the blue phase in the future.

For this example I’m just going to factor all the code inside of the if block out into a function “filterProducts”
{% gist https://gist.github.com/kino6052/5888801da366af15c3ffb283f307a777.js %}
**\*NOTE: **now that the test passed, we can update our test to match an inline snapshot. This will allow us to anticipate changes to state, and quickly update tests.\*

    expect(
    reduce([“change”, “input-01”, “ball”], initialState))
    .toMatchInlineSnapshot();

Connecting the dots (fast-forward)

Let’s fast forward from here to the point where we need to tie the logic of the _“reduce”_ function back to React.

Remember we had a pub-sub for events. Now we have to add a pub-sub for the state.

StateSubject gets updated every time there is a publish from the EventSubject.

We can now just re-render our app with the new state.
{% gist https://gist.github.com/kino6052/d819e5823800744fc018d623dfc0e4fe.js %}
That’s it!

## Conclusion

This is how I do TDD with React in a nutshell, and I was just barely scratching the surface. However, I hope I was able to show how powerful this method is, and with some practice, you will see that with this approach the promise of React — that it makes creating the UIs painless — can actually be fulfilled.

## Note

You probably noticed that all the code inside of “reduce” is synchronous. So, how to deal with asynchronicity? Well, that’s what the events are for, right? Asynchronous === IO and vice versa. All you need to do is have a separate event for your asynchronous response whether that is a timer, network response or things of the sort. I am going to have a deep dive about asynchronous TDD use cases in the next article.

## P. S.

Yes, I was able to do what Redux does (and even take it up a notch) with just a handful of lines of code
