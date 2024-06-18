"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Example 1: Without Return Object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);
//* Example 2: With Return Object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createCustomer(customer) {
    return { name: "", email: "", isActive: true };
}
createCustomer({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false,
};
// myUser.email = "h@gmail.com"; // ✅
// myUser._id = "asa" // ❌
console.log(myUser);
var card = {
    cardnumber: "123456789",
    cardDate: "15/06/2024",
    cvv: 7867,
};
console.log(card);
