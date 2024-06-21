//* Not Generic Syntax
const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

//! Why not use any in terms of generic type?
// Suppose we are passing an argument as number to the function but function could return string.
function identityTwo(val: any): any {
  return val;
}

//* Example 1: Generic With Variable Type
//? Generic Syntax: This is good for making the resuable components and avoid the problem with any type
function identityThree<Type>(val: Type): Type {
  return val;
}

let output1 = identityThree<string>("myString");
let output2 = identityThree<number>(12);
let output3 = identityThree<boolean>(true);
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
function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

let output4 = identityFour<Bootle>({ brand: "hi", type: 12 });
console.log("Output 4: " + output4); // Output 4: [object Object]

//* Example 3: Generic With Array and Regular Function
function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

//* Example 4: Generic With Array and Arrow Function
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

//* Example 5: Generic With Multiple Type
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database, V extends number>(
  valOne: T,
  valTwo: U,
  valThree: V
): object {
  return {
    valOne,
    valTwo,
    valThree,
  };
}

let output5: object = anotherFunction(
  3,
  {
    connection: "connection",
    username: "username",
    password: "password",
  },
  19
);
console.log(output5);
/*
Expected Output:
{
  valOne: 3,
  valTwo: {
    connection: 'connection',
    username: 'username',
    password: 'password'
  },
  valThree: 19
}
*/

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

//* Example 6: Generic with class
class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

let sellableObj1 = new Sellable<string>();
sellableObj1.addToCart("MERN E-BOOK");
let sellableObj2 = new Sellable<number>();
sellableObj2.addToCart(12);
console.log(sellableObj1);
console.log(sellableObj2);
/*
Expected Output:
Sellable { cart: [ 'MERN E-BOOK' ] }
Sellable { cart: [ 12 ] }
*/

//* Example 7: Using Type Parameters in Generic Constraints
function getUserRole<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let availableRoles = { ADMIN: 1, GUEST: 2, TEACHER: "Well", STUDENT: 4 };

let userRole1: number = getUserRole(availableRoles, "ADMIN");
let userRole2: string = getUserRole(availableRoles, "TEACHER");
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
  isImportant: boolean = true;
}

class MERN extends DSA {
  techs: Array<string> = ["MONGODB", "EXPRESS", "REACT", "NODEJS"];
}

class MANOJ extends MERN {
  developer: string = "MERN STACK DEVELOPER";
}

class SDE extends MANOJ {
  money = 10;
  upskill: MANOJ = new MANOJ();
}

class ALLROUNDER extends SDE {
  keeper: SDE = new SDE();
  all: ALLROUNDER = new ALLROUNDER();
}

function createInstance<Type extends ALLROUNDER>(con: new () => Type): Type {
  return new con();
}

let developer: string = createInstance(ALLROUNDER).developer;
let keeper: SDE = createInstance(ALLROUNDER).keeper;
let money: number = createInstance(ALLROUNDER).money;
let upskill: MANOJ = createInstance(ALLROUNDER).upskill;
let techs: Array<string> = createInstance(ALLROUNDER).techs;
let isImportant: boolean = createInstance(ALLROUNDER).isImportant;
let all: ALLROUNDER = createInstance(ALLROUNDER).all;

//* Example 9: Generic Parameter Defaults
function greet<T extends string>(name: T, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Using the function without providing the second argument (uses default value)
console.log(greet("Manoj")); // Output: Hello, Manoj!

// Using the function with both arguments
console.log(greet("Manoj", "Hi")); // Output: Hi, Manoj!

export {};

//? Resource To Read More: https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes
