# Week 4: Research

### 1. What are the differences between var, let, and const?
Before we talk about each of these, there are a few things that must be covered first. 
First let’s talk about scope. Scope is where variables are available for use. Scoping can be global or function/local. This is important as `var` and `let` have entirely different scoping.
Next we need to cover hoisting. Hoisting is a mechanism within JavaScript that takes a variable or even a function declaration and moves them to the top of scoping. In other words if you declare a variable after you had already `console.log`ed it out it will run as if you had declared it before. Simply put, order does not matter if hoisting is available for the variable

`var` used to be the standard way to instantiate a variable but it came with several caveats, as mentioned above, it had issues with scoping and hoisting. With scoping, `var` had limited rules set to it. If you instantiated a `var` variable outside of a function, it would still be available within the function scoping. However, if you instantiated a `var` within a function, then its scoping would remain within the function. 

Lastly, hoisting for `var` is rather lax as well. If you did something like below

```
console.log (greeter);
var greeter = "say hello"
```
then you would get "say hello" back even though the `var` was instantiated after the fact. 

`let` is now considered the better way of going about things. `let` respects scoping and hoisting that var does not. When it comes to scoping for `let` it will not fall outside of the bounds of a function or class, in other words it respects `{}` the brackets. If the `let` was instantiated within the `{}` it will stay in the `{}`. It should be noted that `var` and `let` do share the outside scoping portion though. For example

```
var someVar = 0
function foo(){
    console.log(someVar)
}
```
```
let someVar = 0
function foo(){
    console.log(someVar)
}
```

do the exact same thing. Referencing an instantiated variable that is outside the `{}` brackets is legal.

Lastly, let’s talk about hoisting. Unlike `var`, `let` does not hoist instantiations above a part of code that references it. So if you are expecting to use a variable, then be sure to instantiate it before you call it or reference it.

### 2. What are the differences between callbacks and promises?

A callback according to MDN is "a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."

This works because a function is a value in memory as long as the function isn't invoked it can be passed around and referenced.

A promise on the other hand is "an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value."

The difference here is that a callback is function passed to another function, whereas a promise is an object that that is waiting for the completion of some event/code. The power comes from combining these two entities. A Promise can contain several callbacks that kick into action an event or series of events after the completion of the first event.

### 3. What are some features that are new with ES6?

With the advent of ES6 there were several new features that were added that ES5 didn't have. A new primitive data type `symbol` was added for supporting unique values. `var` is no longer the defacto standard of defining variables, `let` and `const` are now available. Significant performance increases since ES5 have been introduced, included in this is less time-consuming object manipulation. Arrow functions are introduced to ES6, this also includes anonymous functions; the requirement of the function keyword is no longer required.

### 4. How does a promise work?

Let's explain it via an example. Say I'm at the library and I need a book. I don't know if the book is available but I would like to find out. Well I go and ask the librarian for the said book, and she says that she will ask the people in the back. She then tells me that she doesn't have an answer right now for whether she has the book or not, but she "promises" that she will have an answer for me. Eventually I get a call from her telling me that the book is ready.

This is similar to how a JavaScript Promise works. We can't get the value or output from a method right away, but we are promised that a value will be made available at some point in the future.

### 5. What is your favorite thing you learned this week?

How promises work.

## Citation

https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
https://www.geeksforgeeks.org/difference-between-es5-and-es6/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
