// 1. Get input for a and b, then compare them
let a = Number(prompt("Enter the number a:"));
let b = Number(prompt("Enter the number b:"));

if(a === b){
    document.write("yes");
}
else{
    document.write("no");
}
document.write("<br>"); // Added for spacing

// 2. Get input for c and check eligibility
let c = Number(prompt("Enter the number c:"));
if(c > 18){
    document.write("eligible");
}
else{
    document.write("not eligible");
}
document.write("<br>");

// 3. Get input for age and check creation status
let age = Number(prompt("Enter the age:"));
if(age > 32){
    document.write(" created");
}
else{
    document.write("not created");
}
document.write("<br>");

// 4. Get input for score and check grade
let score = Number(prompt("Enter the score:"));
if(score > 90){
    document.write("A grade");
}
else{
    document.write("grade B");
}
document.write("<br>");

// 5. Get input for height and check height status
let height = Number(prompt("Enter the height:"));
if(height > 155){
    document.write("tall");
}
else{
    document.write("short");
}
