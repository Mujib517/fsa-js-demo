// arrow functions
function add(a, b) {
    a++;
    b++;
    return a + b;
}
// function declaration
function fn(a) {
    a++;
    a = a + 10;
    console.log(a);
}

// function expression
var fn = function (a) {
    a++;
    a = a + 10;
    console.log(a);
}

a => {
    a++;
    a = a + 10;
    console.log(a);
}


function fn3(a) {
    return a + 10;
}

a => a + 10;

function fn4(a, b) {
    return a + b;
}

(a, b) => a + b;


var arr = [10, 15, 20, 25, 30, 35];
// odd elements

const isEven = val => {
    console.log(val);
    return val % 2 === 0;
}

var res = arr.filter(val => val % 2 !== 0);

// var even = arr.filter(val => val % 2 === 0);
// asynchronous code
// this keyword
// code of conduct
var even = arr.filter(isEven);
console.log(even);


