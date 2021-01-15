Pattern Strategy

The Strategy is a behavioral design pattern that defines a family of similar algorithms and puts each of them in its own class,
after which the algorithms can be interchanged right at runtime.

Problem - we have decided to create some navigator app, we should have functionality like the search and get a route.
In the first version we have got cars, then pedestrians, cyclist. 
With each new algorithm, the code of the main class of the navigator has doubled. 
It became quite difficult to navigate in such a large classroom.                                                 
Any change to the search algorithms, whether it was fixing bugs or adding a new algorithm, affected the main class. 
This increased the risk of making a mistake by accidentally hitting the rest of the running code.

Decision

The Strategy pattern proposes to define a family of similar algorithms that are often changed or extended and move them into their own classes, called strategies.

Instead of the original class executing this or that algorithm itself, it will act as a context, referring to one of the strategies and delegating the work to it. 
To change the algorithm, it will be enough for you to substitute another strategy object into the context. They must have the same interface.

Advantages:
Isolates algorithm code and data from other classes.
Hot swapping algorithms on the fly.

Disadvantages:
Complicates the program with additional classes.

