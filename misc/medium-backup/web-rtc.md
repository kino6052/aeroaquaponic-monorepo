## My Experience Getting Started with WebRTC

![](https://cdn-images-1.medium.com/max/3840/0*vzViH1oTnBSymXrN.png)

I want to share some of my experiences getting to know WebRTC, and try to explain why it is **MUCH** harder than it seems. Yet, I hope that my insights will help you to get started with your WebRTC projects.

> [https://developer.mozilla.org/en-US/docs/Glossary/WebRTC](https://developer.mozilla.org/en-US/docs/Glossary/WebRTC)
> **WebRTC** (_Web Real-Time Communication_) is an [API](https://developer.mozilla.org/en-US/docs/Glossary/API) that can be used by video-chat, voice-calling, and P2P-file-sharing Web apps.

WebRTC is not a new technology, and there have been many articles about it. (check out some links at the end!) However, the impression I got from reading those articles is that it is **easy **to get started with simple WebRTC real-world use case scenarios.

Just look at this Google I/O presentation dating back to 2013. ([https://youtu.be/p2HzZkd2A40](https://youtu.be/p2HzZkd2A40)) I watched this video just a couple of days ago, and it got me really excited! [Sam Dutton](undefined) and Justin Uberti have done a great job at the presentation. They were able to clearly explain what this project accomplished and what challenges their team has overcome. This video, as well as many other resources, made it look like WebRTC is pretty easy to get into.

However, as I started implementing a simple client, I soon realized that it is not that easy, and here is why.

P.S. No, I’m not going to talk about NAT, STUN or TURN, but the API itself.

First of all, to establish some context, I was trying to build a simple client that could send and receive connections from RTC peers whether local or remote.

I started with a peer connection sample that the WebRTC team provided ([https://webrtc.github.io/samples/src/content/peerconnection/pc1/](https://webrtc.github.io/samples/src/content/peerconnection/pc1/)). As I was examining the source, one thing was immediately apparent — there was a really huge mess associated with the event handling. It was really hard to follow and to trace what is followed by what. Most importantly, it was very confusing to find where the most important steps of connection establishment, namely ‘offer’ and ‘answer,’ happened.

Once I got over the confusion and the steps were clear to me, and I understood how the metadata exchange happens, I went to the next step trying to learn how to use signaling to establish remote connections.

Trying to understand how to properly do signaling was also very disappointing. Mainly, because interacting with an external system is always prone to errors and is extremely hard and time-consuming to debug. I wanted to recreate my personal signaling server, to make sure I understand the underlying logic.

Here is the path I took in order to recreate my personal signaling.

I decided to mock the WebSocket server by having a simple Pub/Sub interface to represent it. For these purposes, I used RxJS Behavior Subject. Working locally, I used it as an abstraction, and just swap the underlying logic behind the interface once my client was in the remote mode.

However, once I started writing the local-mode code, it got really bulky. There was a lot of interconnection between basic signaling, RTC-related messages, connection management, and channel handling. It didn’t take long before it all has become one big spaghetti-like mess.

It was clear that I needed to somehow separate those concerns.

After some thinking, I came to the conclusion that it would have been absolutely great if the only thing my client object knew was when a new connection gets established, and I could subscribe to various media or data channel events accordingly. That’s it. This minimal representation of WebRTC could be just enough to hide all the implementation details. Of course, it doesn’t mean I didn’t need to take care of the underlying logic, and, moreover, it didn’t mean that I was going to do it declaratively via some configuration (because I am really against such approach for many reasons, especially due to the difficulties with debugging and testing).

Here is what the client class looks like:
{% gist https://gist.github.com/kino6052/4e720807c647847d904bb2d132f9bbe9.js %}
I split the underlying logic into three categories:

1.  Broadcasting

2.  RTC-Messaging

3.  Connection Management

**Broadcasting**

I decided to use the simplest broadcasting, where the broadcasting agent broadcasts to every participant. This would allow us to abstract away the implementation of server-side WebSocket signaling.

Here is what the broadcasting agent class looks like:
{% gist https://gist.github.com/kino6052/bf7b66a80fcbd07bbe2dbfae048f3fdf.js %}
One thing to note, however, is that I decided to delay the greeting by an arbitrary 100 ms, so that when a new participant greets everybody, the receivers of this greeting could send an offer first. Otherwise, if two parties send offers at the same time, the connection would fail to establish.

**RTC Messaging**

This module is responsible for sending the RTC connection negotiation messages.

The reason it is separate from broadcasting is that it sends very specific messages the broadcaster doesn’t need to know anything about.

Here is what the RTC Messaging Agent Class looks like:
{% gist https://gist.github.com/kino6052/5b884c87a368ffa5655d5a9d17def919.js %}
**Connection Management**

Connection management is another module that is responsible for creating connections, as well as offers, answers, and setting up a connection. The reason it is separate from the RTC Messaging is that the connection doesn’t need to know about the means of how the meta-data gets transported as long as connection receives remote and local session description.

One thing to note here is that when a participant is added, I have to make sure that there is no connection already. Because if there is a connection, it means that the current participant has received an offer already when it greeted other participants.

Here is what the Connection Management Class looks like:
{% gist https://gist.github.com/kino6052/bdcf1a4ef8ebac1ce367d522baec4253.js %}
Once I got a working solution using the separation of concerns I outlined in this article, I was able to move much quicker and it has become much easier to follow the logic of the connection establishment and data exchange.

**Conclusion**

This separation of concerns allowed me to wrap my head around WebRTC, and make sure that I can correctly negotiate connections between end-points.

Unfortunately, this took way more time than I expected it to, and I didn’t even get to the NAT and other things in this article.

My conclusion on why this API is harder to wrap your head around than I expected is that it requires you to know quite a bit about the communication between two end-points. Despite its seeming minimalism,RTCPeerConnection is just the tip of the ICEberg (no pun intended) not providing enough abstraction about the underlying logic.

I hope that maybe at some point there will be introduced a few extra API interfaces that will facilitate WebRTC interaction. Maybe in a similar fashion as some DOM interfaces that rendered jQuery obsolete. Who knows?

I hope that you found this article helpful, and maybe even agree with some of my arguments.

**Source code:** [https://github.com/kino6052/webrtc-example](https://github.com/kino6052/webrtc-example)

**Frameworks:**

There are some wrappers that abstract the underlying implementation pretty well.

[https://peerjs.com](https://peerjs.com/docs.html#start)

[https://stackoverflow.com/questions/24857637/current-state-of-javascript-webrtc-libraries](https://stackoverflow.com/questions/24857637/current-state-of-javascript-webrtc-libraries)

**Articles:**

[https://www.html5rocks.com/en/tutorials/webrtc/basics/](https://www.html5rocks.com/en/tutorials/webrtc/basics/)
[**How JavaScript works: WebRTC and the mechanics of peer to peer networking**](https://blog.sessionstack.com/how-javascript-works-webrtc-and-the-mechanics-of-peer-to-peer-connectivity-87cc56c1d0ab)

[https://medium.com/hackernoon/the-fifteen-minute-webrtc-demo-3f5cf3a71fc4](https://medium.com/hackernoon/the-fifteen-minute-webrtc-demo-3f5cf3a71fc4)
