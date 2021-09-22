// pascal casing
// camel casing
function Mobile(color) {
    this.height = 5;
    this.width = 10;
    this.color = color;
}

// 64bytes
Mobile.prototype.call = function () {
    console.log("Calling...");
}

Mobile.prototype.PI = 3.14;

var m = new Mobile(); // 3*64bytes
var m1 = new Mobile();

console.log(m1.height, m.height);

