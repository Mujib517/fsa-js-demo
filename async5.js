// entity 1
function addAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => res(a + b), 2000);
    });

    return p;
}

function subAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => rej("failed"), 1000);
    });

    return p;
}

function mulAsync(a, b) {
    var p = new Promise((res, rej) => {
        setTimeout(() => res(10, 20), 1000);
    });

    return p;
}

// entity 2
// q
// ECMASCRIPT
// parallel
// addAsync(10, 20).then(res => console.log(res)).catch()
// subAsync(80, 20).then(res => console.log(res));
// mulAsync(10, 20).then(res => console.log(res));

// sequential
// fatal
// addAsync(10, 20)
//     .then(res => subAsync(res, 10))
//     .then(res => mulAsync(res, 10))
//     .then(res => console.log(res))
//     .catch(e => console.log(e));

var addPromise = addAsync(10, 20);
var subPromise = subAsync(10, 20);
var mulPromise = mulAsync(10, 20);

Promise.all([addPromise, subPromise, mulPromise])
    .then(res => console.log(res))
    .catch(e => console.log(e));