// class, init

// constructor function
// no void funs
// function Mobile() {
//     this.width = 5;
//     this.height = 10;

//     return this;
// }

// function f1() {
//     return undefined;
// }

class AbstractMobile {
    sms() {
        console.log("smsing...");
    }
}

class Mobile extends AbstractMobile {
    // only one 
    // constructor overloading
    constructor() {
        super();
        // init
        console.log('constructor()');
        this.width = 5;
        this.height = 10;
        // db open
    }

    call() {
        console.log("calling...", this.width, this.height);
    }
}

var m = new Mobile();
m.sms();