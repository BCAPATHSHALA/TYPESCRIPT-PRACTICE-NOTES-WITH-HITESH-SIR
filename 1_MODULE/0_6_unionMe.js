//* Example 1: With simple variable
var score = 33;
score = 44;
score = "55";
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
//* Example 3: With simple function's arguments
function getDbId(id) {
    // Making some API calls
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
//? Resolve the problem with id's type
function getDbId1(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//* Example 4: With simple array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true]; // data3 array ek bar me mixed data store kar skta hai like string, number, boolean
var data4 = ["1", "2"]; // data4 array ek bar me only string ya boolean types hi store karega
//* Example 5: With simple menu list
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" // gives an error
