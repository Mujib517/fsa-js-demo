var mobile = {
    name: 'Mobile',
    print: function (p1, p2) {
        console.log(this, p1, p2);
    }
};

var car = {
    name: 'Car'
};

// run time polymorphism
// bind
// mobile.print.call(car, 1, 2);
// mobile.print.apply(car, [1, 2]);

// // fixed context
// const f = mobile.print.bind(mobile);
// f.call(car, 1, 2);
// modules (nodejs, es6)
// closures
var obj = {
    length: 4,
    0: 'one',
    1: 'two',
    2: 'three',
    3: 'four',
}
// arr.slice(0,2);

const sliceFn = Array.prototype.slice.bind(obj);
// const res = Array.prototype.slice.call(obj,0,2);

// const res = [].slice.apply(obj, [0, 2])
console.log(sliceFn(0, 2));