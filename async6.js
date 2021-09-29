// entity 1
function addAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var c = a + b;
            res(c);
        }, 1000);
    });
}

function subAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Failed");
        }, 1000);
    });
}

function mulAsync(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            var c = a * b;
            res(c);
        }, 1000);
    });
}

async function init() {
    try {
        const addRes = await addAsync(10, 20);
        const subRes = await subAsync(addRes, 10);
        const mulRes = await mulAsync(subRes, 10);
        console.log(mulRes);
    } catch (e) {
        console.log(e);
    }
}

// init();


// sync , async

// sync
// 5mns
// blocking
// timers, db, file, websvc calls, events
for (var i = 0; i < 1000000000000; i++) {
    console.log(i);
}

// async
// non blocking
// ajax
// single page app
// this
for (var i = 0; i < 1000000000000; i++) {
    setTimeout(() => console.log(i), 0);
}