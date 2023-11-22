// const User = {
//   name: "jonathan",
//   email: "fambrojonathan@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "jonathan", isPaid: false, email: "j@h.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User) {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1245",
  name: "j",
  email: "j@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "j@h.com";
