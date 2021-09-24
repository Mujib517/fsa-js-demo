// value types boolean, number, string, null, undefined
// reference types: objects, arrays, function
// 'use strict';
var x = 10;
var y = x;  // copy

var o = {};
var o2 = o; // reference


function add(a, b) {
    o.width = 5;
}

// copy
// pass by value
// pass by reference
// add(x, y);
// add(o, o2);

// initializer
// constructor function
// object.create
// property descriptor
// modes (sloppy, strict)

var abstractMobile = {
    call: function () {
        console.log('calling...');
    },
    sms: function () { }
};

var m = Object.create({}, {
    pi: {
        value: 3.14, writable: false, enumerable: true,
        configurable: false
    },
    width: { value: 5, writable: true, enumerable: true },
    height: { value: 10, enumerable: false },
    call: { value: function () { console.log("vid call"); } }
});

// m.call = function () {
//     console.log('vid call');
// }

// Object.defineProperty(m, 'pi', {
//     writable: true
// }); // writeable
// override

// m.call();

// m.toString = function () {
//     console.log(m.width, m.height, m.pi);
// }

// console.log(m.toString());


m.call();
m.abc();