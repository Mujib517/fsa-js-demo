// refactoring
// shift + f6


function calculateSum(arr) {
    var i = 0;
    var sum = 0;
    while (i < arr.length) {
        sum += arr[i]; // sum = sum + a[i];
        i++;
    }

    return sum;
}

function add(a, b) {

    if (typeof a === 'function') a = a();
    if (typeof b === 'function') b = b();

    if (Array.isArray(a)) a = calculateSum(a);
    if (Array.isArray(b)) b = calculateSum(b);

    var c = a + b;
    console.log(c);

    return c;
}

function f1() {
    return 100;
}

function f2() {
    return 200;
}

add(10, 20);
add('abc', 'def');
add([1, 2, 3], [4, 5, 6]); // 21
add(f1, f2); // 300
add(100, f1);
add([1, 2, 3], 10);
add(f1, [1, 2, 3]);