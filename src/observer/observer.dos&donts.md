Pattern Observer
The Observer also is known as Listener and Subscriber-Publisher.

The Observer is a behavioral design pattern that creates a subscription mechanism that allows one object to watch and respond to events occurring in other objects.

Problem:

Imagine that you have two objects: a Customer and a Store. The store is about to deliver a new product that is interesting to the buyer.
The buyer can go to the store every day to check the availability of the goods. But at the same time, he will be angry, wasting his precious time uselessly.
On the other hand, a store can send spam to each of its customers. This will upset many, since the product is specific, and not everyone needs it.
The result is a conflict: either the buyer wastes time on periodic checks, or the store wastes resources on useless notifications.

Decision:

The Observer pattern suggests storing a list of links to subscriber objects inside the publisher object, and the publisher does not have to maintain a subscription list on its own. It will provide methods for subscribers to add or remove themselves from the list.
Now comes the fun part. When an important event occurs in the publisher, it will go through the list of subscribers and notify them about it by calling a specific method of the subscriber objects.

The publisher does not care which class a particular subscriber has, since they must all follow a common interface and have a single notification method.
After seeing how everything works smoothly, you can isolate a common interface describing the subscription and unsubscribe methods for all publishers. Subscribers will then be able to work with different types of publishers and receive notifications from them through the same method.

Advantages:
You can subscribe and unsubscribe recipients on the fly.
Publishers are independent of specific subscriber classes and vice versa.

Disadvantages:
Subscribers are alerted at random