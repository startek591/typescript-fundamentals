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

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User) {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });
