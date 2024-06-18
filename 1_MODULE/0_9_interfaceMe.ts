//* Example 1:
interface User {
  readonly dbId: number; //? Readonly property
  email: string;
  userId: number;
  googleId?: string; //? Optional property
  startTrail: () => string; //? startTrail and startTrail1 function does work same
  startTrail1(): string;
  getCoupon(couponname: string, value: number): number;
}

//? Possible to rediclaration of the interface with same name
interface User {
  githubToken: string;
}

//? Interface Admin is extending the interface User's properties
interface Admin extends User {
  role: "ADMIN" | "TA" | "LEARNER";
}

//? Create the hitesh's object type Admin
const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "ADMIN",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  startTrail1: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};

//? Access the property of the hitesh's object
hitesh.email = "h@hc.com";
// hitesh.dbId = 33 //? dbId gives an error due to readonly when we can try to access it

export {};

/*
Todo: Interface Vs Type in TS ( 2:34 Minutes )
     1. interface is always extendable ( We can extend it with keyword extends )
     1. type can extend with intersections & 
     2. Adding new field to an existing interface
     2. A type cannot be changed after being created
Readmore About It: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 */
