// entity 1
function addAsync(a, b, cb) {

    setTimeout(() => {
        var c = a + b;
        cb(c);
    }, 2000);
}

function subAsync(a, b, cb) {
    // 0 - async
    // 1000 - async 
    setTimeout(() => cb(a - b));
}

function mulAsync(a, b, cb) {
    setTimeout(() => cb(a * b), 3000);
}

// entity2
// parallel
// sequential
// countries -> States -> cities

// subAsync(40, 20, res => console.log(res));
// mulAsync(10, 20, res => console.log(res));
// addAsync(10, 20, res => console.log(res));

// sequential
// add -> sub -> mul
// callback hell
addAsync(10, 20, res => {
    subAsync(res, 10, res2 => {
        mulAsync(res2, 10, finalRes => {
            console.log(finalRes);
        });
    });
});

// var i = 0;
// var handle = setInterval(() => console.log(++i), 100);

// setTimeout(() => {
//     clearInterval(handle);
// }, 5000);