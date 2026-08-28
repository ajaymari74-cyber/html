const numbers = [-1507, 402, 0, -89, 7305];

numbers.forEach(num => {
    console.log(`\n--- Checking number: ${num} ---`);
    
    // Convert number to string to preserve original digit sequence
    const str = num.toString();
    
    for (let i = 0; i < str.length; i++) {
        // If there's a negative sign, combine it with the first digit
        if (str[i] === '-') {
            let digit = -Number(str[i + 1]);
            console.log(`${digit} is a negative number`);
            i++; // Skip the next index since it's already processed
            continue;
        }

        let digit = Number(str[i]);

        if (digit === 0) {
            console.log(`${digit} is neutral (zero)`);
        } else {
            console.log(`${digit} is a positive number`);
        }
    }
});