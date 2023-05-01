## Some Thoughts on Broadcast Messaging in Programming

Broadcasting is useful when we don’t want to have a single source of truth like a server.

The simplest form of broadcasting is when we don’t need to know anything about other participants.

It happens such that we usually need to know how many participants are there in broadcasting.

In order to know how many members there are we need to count them in some way.

The easiest way to do that is to have a **greeting message**, to which every participant should respond. However, if everybody responds to the message, then every participant will keep greeting each other forever. In order to avoid that **each participant needs to keep track of who has responded to greeting **already.

The **farewell **message could also assist in keeping track so that we know when participants leave and we need to update the count.

However, farewell is not really required, as each of the participants can also keep track of how long each participant is responding, and if the response takes more than a certain amount, then this participant is considered to have left. This is can be called a **time-out**.

The end!
