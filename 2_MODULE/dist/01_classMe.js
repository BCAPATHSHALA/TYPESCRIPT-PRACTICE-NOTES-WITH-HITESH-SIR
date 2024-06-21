"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Example 1: Class and Object and Access Modifiers 
// Class User
class User {
    constructor(email, name) {
        this.city = "Tundla";
        this.email = email;
        this.name = name;
    }
}
// Object of class User
const manoj = new User("manoj@gmail.com", "manoj");
console.log(manoj);
