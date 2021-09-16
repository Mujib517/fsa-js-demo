// Node
// Variables 
// Data types
// Operators
// conditional statements
// Loops
// functions

function getPercentage(marks, totalMarks) {
    return (marks / totalMarks) * 100;
}

function printGrade(percentage) {
    if (percentage >= 70) console.log("Distinction");
    else if (percentage >= 60 && percentage < 70) console.log("First class")
    else if (percentage >= 50 && percentage < 60) console.log("Second class");
    else if (percentage >= 40 && percentage < 50) console.log("Third class");
    else console.log("Failed");
}

// refactoring
function calculateGrade(marks) {
    var totalMarks = 600;

    var percentage = getPercentage(marks, totalMarks);
    printGrade(percentage);
}

calculateGrade(450);
calculateGrade(350);
calculateGrade(250);
calculateGrade(100);

// parameters
// input
// f(x) = mx
// y = mx + c
// void add(int a, int b){}

// var x = 10;
// console.log(typeof x);

// //google
// getLocation(ipAddress);
// firstname: DROP TABLE students;

function div(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid arugments");
    }
    if (b === 0) throw new Error("Divide by zero");
    var c = a / b;

    // NaN , number
    // null, object
    return c;
}




// function add(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         var c = a + b;

//         console.log(c);
//     }
//     else throw new Error("Invalid arguments");
// }

// add(10, 20);
// add("Mujib", "Rahman");
// add([1, 2, 3], [4, 5, 6]);
// add(true, false);
