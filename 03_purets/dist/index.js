"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Atlanta";
    }
}
const jonathan = new User("jonathan@gmail.com", "Jonathan Fambro");
