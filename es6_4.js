// var arr = [1, 2, 3, 4, 5, 6];

// const res = arr.map(function (v) {
//     return v * 2;
// });

// console.log(res);

function myMap(fun) {
    var res = [];

    for (var i = 0; i < arr.length; i++) {
        var ret = fun(arr[i]);
        res.push(ret);
    }


    return res;
}

Array.prototype.myMap = myMap;

var arr = [1, 2, 3, 4, 5, 6];

const multiplyBy10 = val => val * 10;
// transformation
const transformedArray = arr.myMap(multiplyBy10);

console.log(transformedArray);