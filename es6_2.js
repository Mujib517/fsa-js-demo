// property destructure
// array destructure
// spread operator (cloning)
// default param values
// const mobile = {
//     width: 5,
//     height: 10,
//     color: 'black'
// };

// es5
// var width = mobile.width;
// var height = mobile.height;

// es6
// const { width, color } = mobile;

var arr = [1, 2, 3, 4];

// es5
// var first = arr[0]
// var second = arr[1];


// es6
// hole
const [first, _, third] = arr;

console.log(first, third);


const mobile = {
    width: 5,
    height: 10,
    color: 'black'
};

const m2 = mobile; // reference 

// const m2 = {};

// es5
// cloning
// for (var key in mobile) {
//     m2[key] = mobile[key]; // m2.width = mobile.width
// }

// const m2 = { ...mobile, color: "red" };

// m2.color = "red";

console.log(m2);


// default params
// function add(a, b = 20, c = 30) {
//     console.log(a + b + c);
// }

// add(10, 30, 40);

// Rest params
// function add(a, b, c) {
//     console.log(a + b + c);
// }

// var arr = [10, 20, 30, 40, 50];
// add(...arr);

// binary & octal

// var n = 1010;
// console.log(parseInt(n, 2));

// var x = 0b1010; // base 10, 0-9, 0-15
// console.log(x);

// var y = 0o134; //0-7  92
// console.log(y);

// var z = 0x123;
// console.log(z);

// prop shorthand notation
var color = 'Red';
var width = 5;
var height = 10;

// option + shift + arrow (up/down)
// alt + shift + arrow (up/down)
// var m = {
//     width,
//     height,
//     color,
// }
// console.log(m);

// string interploation
// var name = "Abc";
// var dept = "HR";
// var salary = 50000;

// var res = name + " works for " + dept + " Dept and he earns " + salary + " Rupees";

// var res2 = `${name} works for ${dept} Dept and he earns ${salary} rupees`;
// console.log(res2);

var arr = [10, 25, 30, 40, 55]; // [20,40,60,80]

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
// }


// function fn(val) {
//     return val / 2;
// }

// // console.log(arr);
// // functional concept
// // immutable
// // user defined map function
// var res = arr.map(fn);

// console.log(arr, res);

// filter
// write an algorithm to filter odd elements

// var res = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         res.push(arr[i]);
//     }
// }

// console.log(res);

// function isOdd(val) {
//     return val % 2 !== 0;
// }

// function isEven(val) {
//     return val % 2 === 0;
// }


// var allOdds = arr.filter(isOdd);
// var allEvens = arr.filter(isEven);

// console.log(allOdds);
// console.log(allEvens);


// reduce

// var s = 0;
// for (var i = 0; i < arr.length; i++) {
//     s += arr[i];
// }

// console.log(s);

// function sum(acc, curr) {
//     return acc + curr;
// }

// var res = arr.reduce(sum);

// console.log(res);