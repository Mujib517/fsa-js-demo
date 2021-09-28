// promise: token
// resolve : success
// reject: failure
// 3 states: pending, resolved, rejected
// promise is resolved/rejected only once
// promise caches the result
// es6 async await
function addAsync(a, b) {
    const prms = new Promise(function (res, rej) {
        setTimeout(function () {
            if (a === 0) rej("Invalid input");
            else {
                a++;
                b++;
                var c = a + b;
                res(c);
            }
        }, 2000);
    });

    return prms;
}

addAsync(10, 20)
    .then(res => console.log(res))
    .catch(err => console.log(err));

