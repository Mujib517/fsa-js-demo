// recursion
// factorial => 4! = 24  => 4*3! => 4*3*2! => 4*3*2*1!
// n! = n*(n-1)!
// a function calling itself
// function factorial(n) {
//     var res = 1;
//     for (var i = 1; i <= n; i++) {
//         res = res * i;
//     }

//     return res;
// }
// recursion
// iteration
// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(4));

// write 1 to n recursively

// n; 4
// stack: p(4),p(3)
// op:1,2,3,4
// T(N) = T(N-1) + 1
// O(N)
function print(n) {
    if (n === 0) return;

    print(n - 1);
    console.log(n);
}


print(3);