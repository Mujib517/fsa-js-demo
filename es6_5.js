

// const isOdd = val => val % 2 !== 0;

// const res = arr.filter(isOdd);

// console.log(res);

// higher order fn
function myFilter(fn) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var ret = fn(arr[i]);
        if (ret) res.push(arr[i]);
    }

    return res;
}

Array.prototype.myFilter = myFilter;

var arr = [1, 2, 3, 4, 5, 6, 7];
const isOdd = val => val % 2 !== 0;

const res = arr.myFilter(isOdd);
console.log(res);