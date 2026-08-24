const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};

const runTest = (a, b, exampleNum) => {
    divideNumbers(a, b)
        .then((result) => {
            console.log(`Example ${exampleNum}`);
            console.log(`  • Dividing ${a} by ${b}...`);
            console.log(`  • Result: ${result}\n`);
        })
        .catch((error) => {
            console.log(`Example ${exampleNum}`);
            console.log(`  • Dividing ${a} by ${b}...`);
            console.log(`  • Error: ${error}\n`);
        });
};

runTest(10, 2, 1);     
runTest(10, 0, 2);     
runTest(144, 12, 3);  
runTest(7, 0, 4);      
runTest(25, 5, 5);   