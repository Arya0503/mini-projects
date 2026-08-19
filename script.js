let num1 = 5;
let num2 = 10;
let num3 = 17;
let num4 = 42;


function checkEvenOrOdd(number) {
    // If the remainder of the number divided by 2 is 0...
    if (number % 2 === 0) {
        console.log(`The number ${number} is even.`);
    } else {
        // Otherwise, it must be odd...
        console.log(`The number ${number} is odd.`);
    }
}


checkEvenOrOdd(num1);
checkEvenOrOdd(num2);
checkEvenOrOdd(num3);
checkEvenOrOdd(num4);