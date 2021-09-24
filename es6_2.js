// property destructure
// array destructure
// spread operator
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

// const m2 = {};

// es5
// cloning
// for (var key in mobile) {
//     m2[key] = mobile[key]; // m2.width = mobile.width
// }

const m2 = { ...mobile, color: "red" };

// m2.color = "red";

console.log(m2);




