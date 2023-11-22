function detectType(val: number | string) {
  typeof val === "string" ? val.toLowerCase() : val + 3;
}

function provideId(id: string | null) {
  return !id ? console.log("Please provide ID") : id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  return "isAdmin" in account ? account.isAdmin : false;
}

function logValue(x: Date | string) {
  return x instanceof Date ? x.toUTCString() : x.toUpperCase();
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}
