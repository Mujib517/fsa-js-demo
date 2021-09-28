// asynchronous X synchronous
// top to bottom
// function add(a, b) {
//     a++;
//     b++;

//     var c = a + b;

//     return c;
// }

// const res = add(10, 20);
// console.log(res);

function fn() {
    console.log('fn executed');
}

// simulates delay
// db 
// webservice
// timers
// file
// setTimeout(fn, 2000); // 1000ms = 1sec
// setInterval(fn, 1000);

// tailor
// 10 days
// typeof NaN 
// typeof null - Object
// single threaded
// non blocking
function addAsync(a, b, cb) {
    console.log('execution started');

    // select * from persons
    // 3mns page blocked
    setTimeout(function () {
        a++;
        b++;
        var c = a + b;
        console.log('processed result');
        cb(c); // callback
    }, 2000);

    console.log('execution completed');
    return undefined;
}



// entity 2
// You
// verbs
function callback(res) {
    console.log('callback', res);
}

addAsync(10, 20, callback);
