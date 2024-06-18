// Syntax: function functionName(argName: type): returnType{Definition of function}

//* Example 1:
function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

let myValue: number = addTwo(5);
console.log(myValue);
// Expected Output: 7

//* Example 2:
function getUpper(val: string): string {
  return val.toUpperCase();
}

let myString: string = getUpper("hitesh");
console.log(myString);
// Expected Output: HITESH

//* Example 3:
function signUpUser(name: string, email: string, isPaid: boolean): void {
  console.log(name, email, isPaid);
}
signUpUser("hitesh", "hitesh@lco.dev", false);
// Expected Output: hitesh hitesh@lco.dev false

//* Example 4: Default Value
let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false
): void => {
  console.log(name, email, isPaid);
};
loginUser("h", "h@h.com");
// Expected Output: h h@h.com false

//* Example 5:
function getValue(myVal: number): boolean {
  if (myVal > 5) {
    return true;
  }
  return false;
}

let myBoolean: boolean = getValue(5);
console.log(myBoolean);
// Expected Output: false

//* Example 6:
const getHello = (s: string): string => {
  return "";
};

let myHello: string = getHello("MANOJ");
console.log(myHello);
// Expected Output: ""

//* Example 7:
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero: string): string => {
  return `hero is ${hero}`;
});

//* Example 8:
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//* Example 9:
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
