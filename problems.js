// given a number print whether it's a prime
// number exactly divisible by 2 (1, n)
// ex: 1,3,5,7,11
// 4: 1,2,4
// 16: 1 to 16, 4 count:3
// %

function isFactor(n, i) {
    return n % i === 0;
}

function isPrime(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if (isFactor(n, i)) count++;
    }

    return count === 2;

    // if (count === 2) return true;
    // return false;

    // if (count === 2) return true;
    // else return false;
}

console.log(isPrime(16));

var res2 = isPrime(5);
console.log(res2);
// isPrime(1);
// isPrime(2);
