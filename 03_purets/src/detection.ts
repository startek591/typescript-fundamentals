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
