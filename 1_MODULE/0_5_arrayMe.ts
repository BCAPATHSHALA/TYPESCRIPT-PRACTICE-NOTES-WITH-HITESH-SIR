//* Example 1:
const superHeros: string[] = [];
// OR
const superHeros1: Array<string> = [];

//* Example 2:
const heroPower: number[] = [];
// OR
const heroPower1: Array<number> = [];

//* Example 3:
type User = {
  name: string;
  isActive: boolean;
};
const allUsers: User[] = [];

//* Example 4: 2D Array
const MLModels: number[][] = [[255, 255, 255], []];
// OR
const MLModels1: Array<Array<number>> = [[255, 255, 255], []];

// USAGE OF superHeros, heroPower, and allUsers
superHeros.push("spiderman");
heroPower.push(2);
allUsers.push({ name: "", isActive: true });

export {};
