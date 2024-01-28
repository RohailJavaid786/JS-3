
// Q3 temp

let temperature = prompt("Enter the current temperature in Celsius:");
if (temperature > 30) {
  alert("It's a hot day!");
} else {
  alert("The weather is moderate.");
}


//marksheet

let obtMarks = prompt("Enter your obtained marks: ");
let obt = Number(obtMarks);
let totalMarks = prompt("Enter your total marks: ");
let total = Number(totalMarks);

const percentage = (obt / total) * 100;

if (percentage >= 80) {
    console.log("Your grade is A-ONE");
} else if (percentage >= 70) {
    console.log("Your grade is A");
} else if (percentage >= 60) {
    console.log("Your grade is B");
} else if (percentage >= 50) {
    console.log("Your grade is C");
} else {
    console.log("You are FAIL");
}