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
  private _courseCount = 1;
  readonly city: string = "Atlanta";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get AppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const jonathan = new User("jonathan@gmail.com", "Jonathan Fambro");
