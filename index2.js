// write a prg to provide grades for a candidate
// 450, 6subjects
// percentage
// >=70 Distinction
// >=60 && <69  First class
// >=50 && <59  Second class
// >=40 && <49  Thrid class
// <40 : failed
var marks = 450;
var totalMarks = 600;

var percentage = (marks / totalMarks) * 100;

// if (percentage >= 70) console.log("Distinction");
// else if (percentage >= 60 && percentage < 70) console.log("First class")
// else if (percentage >= 50 && percentage < 60) console.log("Second class");
// else if (percentage >= 40 && percentage < 50) console.log("Third class");
// else console.log("Failed");

// if (percentage >= 70) console.log("Distinction");
// else if (percentage >= 60) console.log("First class")
// else if (percentage >= 50) console.log("Second class");
// else if (percentage >= 40) console.log("Third class");
// else console.log("Failed");
// null, undefined
// logical operator
// conditional operators
// conditional statements 
// var x = null; // nothing
// var y;

// console.log(typeof x, y);

var marks = 70;

// if (marks === 70) {
//     console.log("A");
// }
// else if (marks === 60) {
//     console.log("B");
// }
// else if (marks === 50) {
//     console.log("B+");
// }
// else if (marks === 40) {
//     console.log("C");
// } else {
//     console.log("Failed");
// }

switch (marks) {
    case 70:
        console.log("A");
        break;
    case 60:
    case 50:
        console.log("B+");
        break;
    case 40:
        console.log("C");
        break;

    default:
        console.log("Failed");
        break;
}

