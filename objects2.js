// constructor function
// 4*64
// var x = 10;
// var mobile = {
//     width: 10,
//     height: 5,
//     color: 'black',
//     call: function () { }
// };
// plan, template
// class
function Mobile(color) {
    this.height = 5;
    this.width = 10;
    this.color = color;

    this.call = function () { };
}

// object
var m2 = new Mobile("Black");

// var x = 10; //8bytes
// var y = x; // copy operation
var m = new Mobile("Red");
var m0 = m; //referenced

console.log(m === m0);
console.log(m === m2);






// value types, reference types

 // 8bytes
// y = 100;

// console.log(x, y);

