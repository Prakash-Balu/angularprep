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
    } else {
        console.log("Please enter a valid number.");
    }
}


// Prompt user for input
const input2 = prompt("Enter a number:");

if (input2 !== null) {
    const num = parseInt(input2);

    if (!isNaN(num)) {
        let i = 1;

        while (i <= num) {
            if (i % 5 !== 0) {
                console.log(i);
            }
            i++;
        }

    } else {
        console.log("Please enter a valid number.");
    }
}