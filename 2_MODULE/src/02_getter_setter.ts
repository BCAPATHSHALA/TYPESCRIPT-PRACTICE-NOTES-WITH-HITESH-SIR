// Define the User class
class User {
  protected _courseCount = 1;
  readonly city: string = "Jaipur";

  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  // Getter for Apple email
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // Getter for courseCount
  get courseCount(): number {
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
const email: string = manoj.getAppleEmail;
console.log(email);
/*
  Expected Output:
  applemanoj@gmail.com
*/

// Access the courseCount using the getter
const courseCount: number = manoj.courseCount;
console.log(courseCount);
/*
  Expected Output:
  1
*/

// Set the courseCount using the setter
manoj.courseCount = 2; // This should work
console.log(manoj.courseCount); // Expected Output: 2
//! manoj.courseCount = 1; // This should throw an error

export {};
