
function analyzeNumber(n) {
    console.log(`\nEx - Number :- ${n}`);

    let sumN = 0;
    for (let i = 1; i <= n; i++) {
        sumN += i; // Adds every number from 1 to n together
    }
    console.log(`Sum of first ${n} numbers: ${sumN}`);

    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(n * i); // Multiplies n by 1 through 10
    }
    console.log(`Table of ${n}: ${table.join(', ')}`);

    let temp = n;
    let sumDigits = 0;
    let armstrongSum = 0;

    while (temp > 0) {
        let digit = temp % 10; // Grabs the last digit
        sumDigits += digit;
        armstrongSum += Math.pow(digit, 3); // Cubes the digit (as per instructions)
        temp = Math.floor(temp / 10); // Removes the last digit
    }
    console.log(`Sum of its digits: ${sumDigits}`);
    console.log(`Is it an Armstrong number? ${armstrongSum === n ? 'Yes' : 'No'}`);

    let factors = [];
    let isPrime = true;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i); // If it divides cleanly, it's a factor
        }
    }
    // A prime number only has exactly 2 factors: 1 and itself
    if (n <= 1 || factors.length > 2) {
        isPrime = false;
    }
    console.log(`Is it a prime number? ${isPrime ? 'Yes' : 'No'}`);
    console.log(`Factors: ${factors.join(', ')}`);
}

let num1 = 153; // Armstrong number
let num2 = 7;   // Prime number
let num3 = 12;  // Standard composite number
let num4 = 28;  // Perfect number
let num5 = 370; // Another Armstrong number

analyzeNumber(num1);
analyzeNumber(num2);
analyzeNumber(num3);
analyzeNumber(num4);
analyzeNumber(num5);