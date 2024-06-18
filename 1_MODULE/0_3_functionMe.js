"use strict";
// Syntax: function functionName(argName: type): returnType{Definition of function}
Object.defineProperty(exports, "__esModule", { value: true });
//* Example 1:
function addTwo(num) {
    return num + 2;
    // return "hello"
}
var myValue = addTwo(5);
console.log(myValue);
// Expected Output: 7
//* Example 2:
function getUpper(val) {
    return val.toUpperCase();
}
var myString = getUpper("hitesh");
console.log(myString);
// Expected Output: HITESH
//* Example 3:
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
signUpUser("hitesh", "hitesh@lco.dev", false);
// Expected Output: hitesh hitesh@lco.dev false
//* Example 4: Default Value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, isPaid);
};
loginUser("h", "h@h.com");
// Expected Output: h h@h.com false
//* Example 5:
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
var myBoolean = getValue(5);
console.log(myBoolean);
// Expected Output: false
//* Example 6:
var getHello = function (s) {
    return "";
};
var myHello = getHello("MANOJ");
console.log(myHello);
// Expected Output: ""
//* Example 7:
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//* Example 8:
function consoleError(errmsg) {
    console.log(errmsg);
}
//* Example 9:
function handleError(errmsg) {
    throw new Error(errmsg);
}
