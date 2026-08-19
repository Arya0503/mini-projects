# Task 6: JavaScript - Compound Interest Calculation
## Project Overview
The goal was to create a script that calculates compound interest using static variables and outputs the result directly to the browser's console.

## How to Run
1. Unzip the folder.
2. Open `index.html` in any web browser 
3. Right-click anywhere on the page and select **"Inspect"** (or press F12 on your keyboard).
4. Click on the **"Console"** tab at the top of the developer tools window to see the calculated compound interest output.

## Reflection
Converting a standard math formula into code was an interesting exercise. I learned that you can't just use standard math notation for exponents in older JavaScript syntax, so I utilized the `Math.pow()` method to handle the `(nt)` part of the equation. I also decided to use the `.toFixed(2)` method on the final `console.log()` output because dealing with raw floating-point numbers results in way too many decimal places, and rounding it to two decimal places makes it look like actual currency.
