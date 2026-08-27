// let primeCount = 0;

// for (let z = 1; z <= 100; z++) {
//     let count = 0;

//     for (let i = 1; i <= z; i++) {
//         if (z % i === 0) {
//             count++;
//         }
//     }

//     if (count === 2) {
//         console.log(z + " is a prime number");
//         primeCount++;
//     }
// }

// console.log("Total prime numbers from 1 to 100:", primeCount);

// prime Number Counts

let primeCount = 0;

for (let z = 1; z <= 100; z++) {
    let count = 0;

    for (let i = 1; i <= z; i++) {
        if (z % i === 0 ) {
            count++;
        }
    }

    if (count === 2) {
        primeCount++;
    }
}

console.log(primeCount);


