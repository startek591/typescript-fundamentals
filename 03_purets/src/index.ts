class User {
  email: string;
  name: string;
  readonly city: string = "Atlanta";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const jonathan = new User("jonathan@gmail.com", "Jonathan Fambro");
