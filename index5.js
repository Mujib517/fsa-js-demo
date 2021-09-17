var age = '10.20';

var x = Number(age);
var y = parseFloat(age);
var z = +age;
var w = 100;

console.log(typeof w.toString())
// number, number
var mobile = {
    width: 5,
    height: 10
}

// serialization x deserialization
console.log(JSON.stringify(mobile)); //json

var data = '{"width":5,"height":10}';

console.log(JSON.parse(data));

// console.log(typeof age, typeof x, typeof y, x, y, typeof z, z);