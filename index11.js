// searching
// given an array find x, return boolean result, recursively
// [10,20,30,40]  35
/*
    i   x   i<4
    0   30  
    1   30  
    2   
*/
// 0,1,2,3,4
function search(arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === x) return true;
    }
    return false;
}

// T(N) = T(N-1) + 1
// function searchRec(arr, x, i) {
//     if (i === arr.length) return false;

//     // base condition
//     if (arr[i] === x) return true;
//     searchRec(arr, x, i + 1);
// }

// function searchRec2(arr, x) {
//     searchRec(arr, x, 0);
// }

// searchRec2([102, 20, 30], 0);


// given an array find min element
// [10,-1,15,100,20,-5] => -1
// temp: -5
// exception handling
// runtime error
// compile time
// java -> .class -> JIT
// java -> .jar, .apk ->  JIT
// javascript 
//  10/2  var c = a/b;
function minRec(arr, i, temp) {
    try {
        throw new Error("Failed");
        if (i === arr.length) return temp;

        if (arr[i] < temp) temp = arr[i];
        return minRec(arr, i + 1, temp);
    } catch (e) {
        console.log(e);
    }
    finally {
        // release resources
        // clean up
        console.log("finally");
    }
}

var res = minRec([10, -1, 15, 100, 20, -5], 0, Number.MAX_VALUE);
console.log(res);
