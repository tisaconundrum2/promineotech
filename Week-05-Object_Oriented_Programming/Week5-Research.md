# Week 5 Research:

### 1. What are the four pillars of Object-Oriented Programming? Explain each pillar.

- Abstraction
Abstraction is in a nut shell only showing the necessary details. It completely cuts out all the the technical and leaves a user with just the necessary that they need to concern themselves with.

- Encapsulation
Is in the act of enclosing something. Encapsulation can be used to hide funcitonality, or features. 

- Inheritance
Inheritance is the act of letting an  object acquire the properties and methods of another object.
Reusability is the main benefit here. We know sometimes that multiple places need to do the same thing, and they need to do everything the same except for one small part. This is a problem inheritance can solve.

- Polymorphism
Polymorphism itself means "the condition of occurring in several different forms." That is to say that with inheritance, behaviros can be shared, while allowing custom overrides. 

### 2. What is the relationship between a Class and an Object?
What is a class?  Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. 

What is an Object?  Objects are a standalone entity, with properties and type.

These two entities are very similar in JavaScript. However, it should be noted that Classes weren't introduced until ES6. Before if you wanted to do any kind of OOP you would have to utilize `prototype` inheritance and closures, functions within functions. The problem with this is that context of the keyword `this` would be lost and it was hard to tell what `Object` or `function` it belonged to.

## Citation
https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects