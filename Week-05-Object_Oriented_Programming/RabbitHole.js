// Object Literals

const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
};

function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi;

/*
Manager
Object { name: "Karina", age: 27, job: "Software Engineer", sayHi: sayHi() }
    age: 27
    job: "Software Engineer"
    name: "Karina"
    sayHi: function sayHi()
*/

//================================================================

//Object Notation

function objectNotationManager(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Manager = new objectNotationManager("Karina", 27, "Software Engineer")

function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
}

Manager.sayHi = sayHi

/*
functionManager
    Object { name: "Karina notation", age: 27, job: "Software Engineer", sayHi: sayHi() }
        age: 27
        job: "Software Engineer"
        name: "Karina notation"
        sayHi: function sayHi()
*/

//================================================================

//Object Notation but sayHi is inside the function (Closure)

function objectNotationManager(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayHi = function () {
        console.log(`Hello, my name is ${this.name} and I ran from within the function`);
    }
}

Manager = new objectNotationManager("Karina", 27, "Software Engineer")

/*
functionManager
    Object { name: "Karina notation", age: 27, job: "Software Engineer", sayHi: sayHi() }
        age: 27
        job: "Software Engineer"
        name: "Karina notation"
        sayHi: function sayHi()
*/

//================================================================

//With a Class ?

class objectClassManager {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    sayHi() {
        console.log(`Hello, my name is ${this.name} and I ran from within a class`);
    }
}

Manager = new objectClassManager("Karina", 27, "Software Engineer")

/*
Object { name: "Karina", age: 27, job: "Software Engineer" }
    age: 27
    job: "Software Engineer"
    name: "Karina"
    <prototype>: Object { … }
        constructor: class objectClassManager { constructor(name, age, job) }
        sayHi: function sayHi()
*/
