// 'use strict'
function Mobile() {
    this.width = 10;
    this.height = 20;

    this.call = function () { }
}

// new - 'this' current object
// fun - 'this' refers to global (node:global, browser: window)
// fun - 'this' refers to undefined in strict mode
// inner functions refers to global
// inner functions refers to undefined in strict mode
// inner arrow functions refers to current object both in strict & sloppy mode
// setTimeout
// const m1 = new Mobile();

// function f1() {
//     console.log(this);
// }

// f1();
// context
var mobile = {
    name: 'Mobile',
    width: 5,
    height: 10,
    print: function () {
        const xyz = () => {
            console.log(this.name);
        }
        xyz();
    }
}

var car = {
    name: 'Car',
    print: function () {
        console.log(this);
    }
}

var f = mobile.print
f();

