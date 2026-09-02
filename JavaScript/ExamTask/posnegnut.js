let num = -1507;

// console.log(`\n--- Checking number: ${num} ---`);

const str = num.toString();

for (let i = 0; i < str.length; i++) {

    if (str[i] === '-') {
        let digit = -Number(str[i + 1]);
        console.log(`${digit} is a negative number`);
        i++;
        continue;
    }

    let digit = Number(str[i]);

    if (digit === 0) {
        console.log(`${digit} is neutral (zero)`);
    } else {
        console.log(`${digit} is a positive number`);
    }
}