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
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valueTwo) {
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
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
