const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// Generics
function identityThree<Type>(val: Type): Type {
  return val;
}

// Generics shortcut
function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "Coca-a-Cola", type: 1 });

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  userName: string;
  password: string;
}

function anotherFunction<T, U extends Database>(
  valOne: T,
  valueTwo: U
): object {
  return {
    valOne,
    valueTwo,
  };
}

anotherFunction(3, {
  connection: "wired",
  userName: "Thomas",
  password: "T1234",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
