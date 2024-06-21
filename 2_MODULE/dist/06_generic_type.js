"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Not Generic Syntax
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
//! Why not use any in terms of generic type?
// Suppose we are passing an argument as number to the function but function could return string.
function identityTwo(val) {
    return val;
}
//* Example 1: Generic With Variable Type
//? Generic Syntax: This is good for making the resuable components and avoid the problem with any type
function identityThree(val) {
    return val;
}
let output1 = identityThree("myString");
let output2 = identityThree(12);
let output3 = identityThree(true);
console.table("Output 1: " + output1);
console.table("Output 2: " + output2);
console.table("Output 3: " + output3);
/*
Expected Output:
Output 1: myString
Output 2: 12
Output 3: true
*/
//* Example 2: Generic With Interface Type
function identityFour(val) {
    return val;
}
let output4 = identityFour({ brand: "hi", type: 12 });
console.log("Output 4: " + output4); // Output 4: [object Object]
//* Example 3: Generic With Array and Regular Function
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//* Example 4: Generic With Array and Arrow Function
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo, valThree) {
    return {
        valOne,
        valTwo,
        valThree,
    };
}
let output5 = anotherFunction(3, {
    connection: "connection",
    username: "username",
    password: "password",
}, 19);
console.log(output5);
//* Example 6: Generic with class
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
let sellableObj1 = new Sellable();
sellableObj1.addToCart("MERN E-BOOK");
let sellableObj2 = new Sellable();
sellableObj2.addToCart(12);
console.log(sellableObj1);
console.log(sellableObj2);
/*
Expected Output:
Sellable { cart: [ 'MERN E-BOOK' ] }
Sellable { cart: [ 12 ] }
*/
//* Example 7: Using Type Parameters in Generic Constraints
function getUserRole(obj, key) {
    return obj[key];
}
let availableRoles = { ADMIN: 1, GUEST: 2, TEACHER: "Well", STUDENT: 4 };
let userRole1 = getUserRole(availableRoles, "ADMIN");
let userRole2 = getUserRole(availableRoles, "TEACHER");
console.log(userRole1); // Expected Output: 1
console.log(userRole2); // Expected Output: well
//* Example 8: Using Class Types in Generics
/*
Syntax:
function functionName<Type>(arg: { new (): Type }): Type {
  return new arg();
}
*/
class DSA {
    constructor() {
        this.isImportant = true;
    }
}
class MERN extends DSA {
    constructor() {
        super(...arguments);
        this.techs = ["MONGODB", "EXPRESS", "REACT", "NODEJS"];
    }
}
class MANOJ extends MERN {
    constructor() {
        super(...arguments);
        this.developer = "MERN STACK DEVELOPER";
    }
}
class SDE extends MANOJ {
    constructor() {
        super(...arguments);
        this.money = 10;
        this.upskill = new MANOJ();
    }
}
class ALLROUNDER extends SDE {
    constructor() {
        super(...arguments);
        this.keeper = new SDE();
        this.all = new ALLROUNDER();
    }
}
function createInstance(con) {
    return new con();
}
let developer = createInstance(ALLROUNDER).developer;
let keeper = createInstance(ALLROUNDER).keeper;
let money = createInstance(ALLROUNDER).money;
let upskill = createInstance(ALLROUNDER).upskill;
let techs = createInstance(ALLROUNDER).techs;
let isImportant = createInstance(ALLROUNDER).isImportant;
let all = createInstance(ALLROUNDER).all;
//* Example 9: Generic Parameter Defaults
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
// Using the function without providing the second argument (uses default value)
console.log(greet("Manoj")); // Output: Hello, Manoj!
// Using the function with both arguments
console.log(greet("Manoj", "Hi")); // Output: Hi, Manoj!
//? Resource To Read More: https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes
