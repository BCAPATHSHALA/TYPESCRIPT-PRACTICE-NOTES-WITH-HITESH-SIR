"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the User class
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    // Getter for Apple email
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    // Getter for courseCount
    get courseCount() {
        return this._courseCount;
    }
    // Setter for courseCount with validation
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1.");
        }
        this._courseCount = courseNumber;
    }
}
// Create an instance of User
const manoj = new User("manoj@gmail.com", "manoj", "UID01");
console.log(manoj);
/*
  Expected Output:
  User {
    email: 'manoj@gmail.com',
    name: 'manoj',
    userId: 'UID01',
    _courseCount: 1,
    city: 'Jaipur'
  }
*/
// Access the Apple email
const email = manoj.getAppleEmail;
console.log(email);
/*
  Expected Output:
  applemanoj@gmail.com
*/
// Access the courseCount using the getter
const courseCount = manoj.courseCount;
console.log(courseCount);
/*
  Expected Output:
  1
*/
// Set the courseCount using the setter
manoj.courseCount = 2; // This should work
console.log(manoj.courseCount); // Expected Output: 2
