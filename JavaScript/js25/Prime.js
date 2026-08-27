
let n = 32;
let rev = 0;


while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = parseInt(n / 10);
}


console.log("Reverse number = " + rev + "<br>");


let count = 0;


for (let i = 1; i <= rev; i++) {
    if (rev % i == 0) {
        count++;
    }
}


if (count == 2) {
    console.log("Reverse number is a prime number");
} else {
    console.log("Reverse number is not a prime number");
}