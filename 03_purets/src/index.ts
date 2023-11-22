// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Atlanta";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
  readonly city: string = "Atlanta";
  constructor(public email: string, public name: string) {}
}

const jonathan = new User("jonathan@gmail.com", "Jonathan Fambro");
