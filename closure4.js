class Counter {

    constructor(cnt) {
        this.count = cnt;
    }

    inc() {
        console.log(++this.count);
    }

    dec() {
        console.log(--this.count);
    }
}

var counter = new Counter(0);
counter.inc();
counter.inc();
counter.inc();

counter.dec();
counter.dec();

