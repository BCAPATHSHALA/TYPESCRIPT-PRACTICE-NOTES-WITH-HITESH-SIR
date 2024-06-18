// Syntax: let variableName: type = value;

//* Example 1: string
let title: string = "Console Busters";
console.log("Title: ", title);
console.log("Title: ", title.toUpperCase());

//* Example 2: number
let userId = 334455.3;
userId.toFixed();
// userId = "hitesh" // Error: Type string is not assignable to type number

//* Example 3: boolean
let isLoggedIn: boolean = false;

let hero: string;
function getHero() {
  return "thor";
}
hero = getHero();

export {};
