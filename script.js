let P = 10000;       
let r = 0.05;        
let n = 12;          
let t = 3;
          
//Apply the formula: A = P(1 + (r/n))^(nt)
let A = P * Math.pow((1 + (r / n)), (n * t));
let compoundInterest = A - P;

console.log(`The compound interest after ${t} years is: ${compoundInterest.toFixed(2)}`);