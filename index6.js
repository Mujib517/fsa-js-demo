function getDigit(ch) {
    return ch * 1;
}

function parseNumber(n) {
    var value = 0;
    var decimalPlaces = 1;

    for (var i = n.length - 1; i >= 0; i--) {
        var ch = n[i];
        value = value + getDigit(ch) * decimalPlaces;
        // decimalPlaces = decimalPlaces * 10;
        decimalPlaces *= 10;
    }

    return value;
}

var res = parseNumber('1234.10')
console.log(res, typeof res);