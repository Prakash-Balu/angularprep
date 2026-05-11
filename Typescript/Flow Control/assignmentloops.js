"use strict";
// Prompt user for input
const input = prompt("Enter a number:");
if (input !== null) {
    const num = parseInt(input);
    if (!isNaN(num)) {
        for (let i = 1; i <= num; i++) {
            if (i % 5 === 0) {
                continue; // skip multiples of 5
            }
            console.log(i);
        }
    }
    else {
        console.log("Please enter a valid number.");
    }
}
