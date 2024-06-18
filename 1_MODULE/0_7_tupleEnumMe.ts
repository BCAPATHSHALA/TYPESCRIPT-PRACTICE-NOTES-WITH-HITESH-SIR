/*
! What is tuple enum?
? This is a type of array and order does metter according to the which data type is exist at the index
*/

//* Example 1: string at 0-index, number at 1-index, boolean at 2-index
let tUser: [string, number, boolean];
tUser = ["hc", 131, true];
// tUser = [131, "hc", true]; // Gives the error due to type order

//* Example 2: for rgb colors
let rgb: [number, number, number] = [255, 123, 112];

//* Example 3: tuple with type alias
type User = [number, string];
const newUser: User = [112, "example@google.com"];

newUser[1] = "hc.com";
// newUser.push(true) //? Typescript array push method can't catch a tuple type of the array

export {};
