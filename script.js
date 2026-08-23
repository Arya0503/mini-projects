
const dummyArray = [4, 8, 2, 11, 6, 7, 10];

const findMax = function(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

const calculateSum = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};

function countOddNumbers(arr) {
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount;
}

console.log(`Ex Array:- [${dummyArray.join(', ')}]`);
console.log(`Maximum number: ${findMax(dummyArray)}`);
console.log(`Sum of all elements: ${calculateSum(dummyArray)}`);
console.log(`Count of odd numbers: ${countOddNumbers(dummyArray)}`);