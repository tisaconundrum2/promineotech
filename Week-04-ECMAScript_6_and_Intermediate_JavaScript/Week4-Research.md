# Week 4: Research

### 1. What are the differences between var, let, and const?
Before we talk about each of these, there are a few things that must be covered first. 
First lets talk about scope. Scope is where variables are available for use. Scoping can be global or function/local. This is important as `var` and `let` have entirely different scoping.
Next we need to cover hoisting. Hoisting is a mechanism within Javascript that takes a variable or even a function declaration and moves them to the top of scoping. In other words if you declare a variable after you had already `console.log`ed it out it will run as if you had declared it before. Simply put, order does not matter if hoisting is available for the variable

`var` used to be the standard way to instantiate a variable but it came with several caveats, as mentioned above, it had issues with scoping and hoisting. With scoping, `var` had limited rules set to it. If you instantiated a `var` variable outside of a function, it would still be available within the function scoping. However, if you instantiated a `var` within a function, then it's scoping would remain within the function. 

Lastly hoisting for `var` is rather lax as well. If you did something like below

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

Lastly, lets talk about hoisting. Unlike `var`, `let` does not hoist instantiations above a part of code that references it. So if you are expecting to use a variable, then be sure to instantiate it before you call it or reference it.

### 2. What are the differences between callbacks and promises?



### 3. What are some features that are new with ES6?

### 4. How does a promise work?

### 5. What is your favorite thing you learned this week?

## Citation
https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/