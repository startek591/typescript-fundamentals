"use strict";
function detectType(val) {
    typeof val === "string" ? val.toLowerCase() : val + 3;
}
function provideId(id) {
    return !id ? console.log("Please provide ID") : id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
