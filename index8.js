// higher order fun
function fun() {
    console.log('fun()');

    function fun2() {
        console.log('fun2()');
    }

    return fun2;
}

// fun();

var res = fun();
console.log(typeof res);

// function add(a, b) {
//     var c = a + b;

//     console.log(c);
//     return c;
// }

// add(10, 20);
// add("abc", "def");

// function f1() {
//     return 100;
// }

// function f2() {
//     return 200;
// }

// // functional programming
// // higher order function
// add(f1, f2);

// add(100, f1, 200, 400); // /too many args

// add(100);
// add();

// console.log(typeof f1);