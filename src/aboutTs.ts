// Compiled Language: Java, GoLang, C, C++, C#, Rust     ==>   Compiling & Running
// A compiled language is translated into machine code before the program runs. 


// Interpreted Language: NodeJS, Python, PHP, Ruby       ==>   Running
// An interpreted language is translated and executed line by line while the program runs.


// Error type
// - Compiled.   --> Type checked before running
// - Interpreted --> Type checked during running



// TypeScript itself is mainly a compile-time tool

// Primitive types:         `number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
// Object/reference types:  `object`, `Array`, `Tuple`, `Function`, `Interface`, `Class`
// Special types:           `any`, `unknown`, `void`, `never`


let box: string = "hello";
box = "100"

const counter: number = 100;

let stage: number | string = "hello";
stage = 100

const pending: boolean = true

let skills: (string | number)[]
skills = ['Problem Solving', 'Software Design', 'Programming', 100]




// interface
interface Person1 {
    namee: string,
    agee: number,
    nation: string
}

const person1: Person1 = {
    namee: "martin",
    agee: 23,
    nation: 'American'
}


class Person {
    age: number;
    firstName: string;
    lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person(30, 'Simon', 'Robert')




// Architectural pattern: MVC, Dependency Injection, MVP

// MVC = MODEL VIEW CONTROLLER

// Design pattern: Middleware, Decorator


// Burak - MVC Pattern
// Nestar - MVC Pattern, Dependency Injection, Decorator Pattern ...


 
// OOP - Object Orienter Programming
// AOP - Aspect Oriented Programming
// FRP - Functional Reactive Programming


// CLUSTER => DATABASE => COLLECTION => DOCUMENT


import moment from 'moment';            // this is in module js
// const moment = require('moment');    // this is in common js





// BSSR
// Client     --> Server,    Server --> Ready HTML
// Browser displays page


// Single Page Application
// Client --> Server,            Server --> Empty HTML + JS
// JavaScript runs in browser
// Client --> API Server,        API Server --> JSON Data
// JS builds UI in browser