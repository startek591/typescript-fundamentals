"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Generics
function identityThree(val) {
    return val;
}
// Generics shortcut
function identityFour(val) {
    return val;
}
identityFour({ brand: "Coca-a-Cola", type: 1 });
