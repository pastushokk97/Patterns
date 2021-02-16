# **Decorator**

A decorator is a structural design pattern that lets you dynamically add new functionality to object objects by wrapping them in these "wrappers".

You are working on an alert library that you can plug into a variety of programs to be notified of important events.

The library is based on the Notifier class with a send method, which takes a message string as input and sends it to all administrators by email. At some point it became clear that email notifications alone were not enough for users. Some of them would like to receive notifications of critical issues via SMS, but then someone reasonably asked why it is impossible to select several types of alerts at once? After all, if suddenly a fire starts in your house, you would like to receive alerts on all channels, right?

You have tried to implement every possible combination of alert subclasses. But after you added the first ten classes, it became clear that this approach was incredibly bloated in the program code.

Inheritance is the first thing that many programmers think of when they need to extend some existing behavior. But the inheritance mechanism has several annoying problems.

It is static. You cannot change the behavior of an existing object. To do this, you need to create a new object by choosing a different subclass.
It does not allow the behavior of multiple classes to be inherited simultaneously Because of this, you have to create many combination subclasses to get the combined behavior.

Any clothing is an analogue of the Decorator. By using the Decorator, you don't change the original class or create any child classes. So with clothes - putting on a sweater, you do not stop being yourself, but you get a new property - protection from the cold. You can go further and put on another decorator on top - a raincoat to protect yourself from the rain.

**Applicability:**

When you can't extend the responsibilities of an object with inheritance.
When you need to add responsibilities to objects on the fly, it's invisible to the code that uses them.

**Advantages:**

Allows you to have several small objects instead of one object for all occasions.

You can add multiple new responsibilities at once.

More flexibility than inheritance.


**Disadvantages:**
Abundance of tiny classes.