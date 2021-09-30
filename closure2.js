// counter, initial value will be passed
// inc, dec

function Counter(count) {

    this.inc = function () {
        ++count;
        console.log(count);
    }

    this.dec = function () {
        --count;
        console.log(count);
    }
}

var counter = new Counter(0);

counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.dec();
counter.dec();