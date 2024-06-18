//* Example 1: With simple variable
let score: number | string = 33;
score = 44;
score = "55";

//* Example 2: With simple type alias
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };

//* Example 3: With simple function's arguments
function getDbId(id: number | string) {
  // Making some API calls
  console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId("3");

//? Resolve the problem with id's type
function getDbId1(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//* Example 4: With simple array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true]; // data3 array ek bar me mixed data store kar skta hai like string, number, boolean
const data4: string[] | boolean[] = ["1", "2"]; // data4 array ek bar me only string ya boolean types hi store karega

//* Example 5: With simple menu list
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" // gives an error

export {};
