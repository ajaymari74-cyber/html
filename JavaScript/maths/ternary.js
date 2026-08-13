let a = Number(prompt("enter the number a:"));
// FIX: Added quotes to text strings
document.write( a > 18 ? "eligible" : "notEligible"); 
document.write("<br>");

let age = Number(prompt("enter the number age:"));
// FIX: Added quotes to text strings
document.write( age > 32 ? "Created" : "notCreated");
document.write("<br>");

let score = Number(prompt("enter the number score:"));
// FIX: Added quotes to text strings
document.write(score > 90 ? "Agrade" : "GradeB");
document.write("<br>");

let height = Number(prompt("enter the number height:"));
// FIX: Added quotes to text strings
document.write( height > 155 ? "Tall" : "short");
document.write("<br>");

// FIX: Changed prompt label from 'a' to 'c'
let c = Number(prompt("enter the number c:")); 
let b = Number(prompt("enter the number b:"));

// FIX: Changed '=' to '===' for comparison, and added quotes to text strings
document.write( c === b ? "yes" : "no"); 
document.write("<br>");
