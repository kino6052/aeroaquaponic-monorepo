## I don’t like GraphQL, so how about JSON and TypeScript?

![[https://react-etc.net/files/2018-01/typescript-graphql.png](https://react-etc.net/files/2018-01/typescript-graphql.png)](https://cdn-images-1.medium.com/max/2000/1*KFlPmF76jX_m7-iGNL5c0g.png)

## Introduction

I will be honest with you, when I first saw GraphQL’s syntax I felt a familiar unpleasant feeling, the same feeling I felt when looking at the syntax of PHP, Perl, or Bash.

I personally think that JSON is a far more elegant way of representing data when compared to XML, YAML, or ProtoBuf. It’s minimalist, easy to read, consistent, and it is seamlessly integrated with JS/TS or Python.

So my heart sinks when I see how JSON gets mutilated by query languages that claim to have a way of getting things out of the database that feels “familiar.”

I know GraphQL services and declarations were meant to be language “agnostic.” So the problem got “solved” by creating a new language. Personally, I find this is a bit funny. To me, it seems similar to a situation when you don’t want to give someone a preference so you just give a preference to somebody outside of the group who is equally disliked by everybody.

Well, since JS/TS is a de facto language of the web that will be used for querying doesn’t it follow that it would be preferable to piggyback off of it to make everybody’s life easier?

But enough complaining, I will try to show you what I mean with concrete examples. I decided to base them on the official GraphQL documentation. ([https://graphql.org/learn/schema/](https://graphql.org/learn/schema/))

## Using TypeScript and JSON for Querying a DB

Here is a small contrived example of how I would personally like to query a database. Feel free to disagree.
{% gist https://gist.github.com/kino6052/9444a8e7f6fe45410425188275807996.js %}

## **Conclusion**

I really wanted to keep it short yet clear enough for my intentions to be understood.
I really think that something as simple as what has been outlined above — of course not without its own challenges — could be a way of querying databases in a similar fashion to GraphQL while being much more “elegant” due to the fact that it is nothing more and nothing else but the client-side TS that you would have to write either way.
