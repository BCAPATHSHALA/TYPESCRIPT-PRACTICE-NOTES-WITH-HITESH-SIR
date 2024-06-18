//* Example 1: Without Return Object
function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "hitesh", isPaid: false, email: "h@h.com" };
createUser(newUser);

//* Example 2: With Return Object
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

//* Example 3: With Type Alias
type Customer = {
  name: string;
  email: string;
  isActive: boolean;
};

function createCustomer(customer: Customer): Customer {
  return { name: "", email: "", isActive: true };
}
createCustomer({ name: "", email: "", isActive: true });

//* Example 4: Readonly Property Keyword and Optional Chain ?
type User = {
  readonly _id: string; // Readonly
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // Optional
};

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

// myUser.email = "h@gmail.com"; // ✅
// myUser._id = "asa" // ❌
console.log(myUser);

//* Example 5: Combine Type Using &
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let card: cardDetails = {
  cardnumber: "123456789",
  cardDate: "15/06/2024",
  cvv: 7867,
};
console.log(card);

export {};
