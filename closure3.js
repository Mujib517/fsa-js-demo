// module pattern
function counter(count) {
    var x = 0;
    var y = 10;

    var f = function () { }

    function inc() {
        console.log(++count);
    }

    function dec() {
        console.log(--count);
    }

    // return {
    //     inc: inc,
    //     dec: dec
    // }
    return {
        inc,
        dec
    }
}

var obj = counter(0);
obj.inc()
obj.inc()
obj.inc()
obj.inc()

obj.dec()
obj.dec()
