function addAsync(a, b, cb) {

    setTimeout(() => {
        if (a === 0) cb("Invalid input");
        else {
            a++;
            b++;
            var c = a + b;
            cb(null, c);
        }
    }, 2000);
}


// select * from persons
// nodejs first param: err, second param: res/data
// async js = 80% nodejs
// callbacks
function callback(err, res) {
    // deduct
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
}

addAsync(10, 20, callback);