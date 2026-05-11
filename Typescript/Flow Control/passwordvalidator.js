"use strict";
var password = 'test@123';
if (password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) {
    console.log('Valid Password');
}
else {
    console.log('Invalid Password ' + password);
}
const input = prompt("Enter a number");
if (input != null) {
    const num = parseInt(input);
    if (!isNaN(num)) {
        var i = 1;
        while (i <= num) {
            if (i % 5 !== 0) {
                console.log(i); // skip multiples of 5
            }
            i++;
        }
    }
    else {
        console.log("Please enter a valid number.");
    }
}
