let a = Number(prompt("Enter your total mark:"));

if (a > 100 || a < 0 || isNaN(a)) {
    document.write("Invalid input");
} else if (a >= 90) {
    document.write("Your Grade is A");
} else if (a >= 80) {
    document.write("Your Grade is B");
} else if (a >= 70) {
    document.write("Your Grade is C");
} else {
    document.write("You FAILED");
}
