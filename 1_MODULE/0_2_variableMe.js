"use strict";
// Syntax: let variableName: type = value;
Object.defineProperty(exports, "__esModule", { value: true });
//* Example 1: string
var title = "Console Busters";
console.log("Title: ", title);
console.log("Title: ", title.toUpperCase());
//* Example 2: number
var userId = 334455.3;
userId.toFixed();
// userId = "hitesh" // Error: Type string is not assignable to type number
//* Example 3: boolean
var isLoggedIn = false;
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
