"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Example 1: Detect the type of variable
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
let output1 = detectType("MANOJ");
let output2 = detectType(12);
console.log("OUTPUT1: " + output1); // OUTPUT1: manoj
console.log("OUTPUT2: " + output2); // OUTPUT2: 15
//* Example 2:
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return null;
    }
    return id.toLowerCase();
}
let output3 = provideId(null);
let output4 = provideId("UID");
console.log("OUTPUT3: " + output3);
console.log("OUTPUT4: " + output4);
/*
Expected Output:
Please provide ID
OUTPUT3: null
OUTPUT4: uid
*/
//* Example 3:
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            // We are passing array
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            // We are passing string
            console.log(strs);
        }
    }
    // We are passing null
}
printAll(null);
printAll("MANOJ NISHAD"); // MANOJ NISHAD
printAll(["MANOJ NISHAD", "AMIT"]); // MANOJ NISHAD, AMIT
function move(animal) {
    if ("swim" in animal) {
        // This block handles Fish or Human who can swim
        if (animal.swim) {
            animal.swim(); // Call swim if it exists
        }
    }
    else {
        // This block handles Bird or Human who can fly
        if (animal.fly) {
            animal.fly(); // Call fly if it exists
        }
    }
}
const fish = { swim: () => console.log("Fish is swimming") };
const bird = { fly: () => console.log("Bird is flying") };
const human = {
    swim: () => console.log("Human is swimming"),
    fly: () => console.log("Human is flying"),
};
move(fish); // Output: Fish is swimming
move(bird); // Output: Bird is flying
move(human); // Output: Human is swimming
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false; // If the account does not have isAdmin, it is not an admin account.
}
const user = { name: "manoj", email: "manoj@gmail.com" };
const admin = {
    name: "devendra",
    email: "devendra@d.com",
    isAdmin: true,
};
console.log(isAdminAccount(user)); // Output: false
console.log(isAdminAccount(admin)); // Output: true
//* Example 6: instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Example usage:
const date = new Date();
const str = "hello world";
logValue(date); // Outputs: Sat, 22 Jun 2024 18:53:08 GMT
logValue(str); // Outputs: "HELLO WORLD"
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // TypeScript now knows pet is Fish1
        return "fish food";
    }
    else {
        pet; // TypeScript now knows pet is Bird1
        return "bird food";
    }
}
const fish1 = { swim: () => console.log("Fish is swimming") };
const bird1 = { fly: () => console.log("Bird is flying") };
console.log(getFood(fish1)); // Output: fish food
console.log(getFood(bird1)); // Output: bird food
function getArea(shape) {
    if (shape.kind === "circle") {
        // Calculate area for a circle
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        // Calculate area for a square
        return shape.sideLength ** 2;
    }
}
const circle = { kind: "circle", radius: 5 };
const square = { kind: "square", sideLength: 4 };
console.log(getArea(circle)); // Output: 78.53981633974483
console.log(getArea(square)); // Output: 16
function getAreaOfShape(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape; // Exhaustiveness checking
            return _defaultforshape;
    }
}
const circle1 = { kind: "circle", radius: 5 };
const square1 = { kind: "square", side: 4 };
const rectangle1 = { kind: "rectangle", length: 6, width: 3 };
console.log(getAreaOfShape(circle1)); // Output: 78.53981633974483
console.log(getAreaOfShape(square1)); // Output: 16
console.log(getAreaOfShape(rectangle1)); // Output: 18
