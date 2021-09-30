function counter(count) {
    return function inc() {
        ++count;
        console.log(count);
    }
}

var f = counter(0);

f();
f();
f();
f();
f();
f();


var counter2 = counter(100);

counter2();
counter2();
counter2();
counter2();