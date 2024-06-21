//* Example 1: Class and Object and Access Modifiers 
// Class User
class User {
  email: string;
  public name: string;
  private readonly city: string = "Tundla";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

// Object of class User
const manoj = new User("manoj@gmail.com", "manoj");
console.log(manoj);
/*
Expected Output:
User { city: 'Tundla', email: 'manoj@gmail.com', name: 'manoj' }
*/

export {};
