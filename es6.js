// class
// var: function scoped, let: block scoped
// const: block scoped, no reassignment
const x = [1, 2, 3];
function f1() {
    // const x = [1, 2, 3];
    x.push(4);
    x.pop();

    // x = [4, 5, 6]; // reassignment

    const o = {};
    o.width = 5;
    o.height = 10;

    delete o.width;

    // x = 20;  // reassigning

    console.log(o);
}


f1();