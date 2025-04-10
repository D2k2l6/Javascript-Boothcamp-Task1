let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Calculate the sum of all numbers from 1 to 100 using a do-while loop
let sum = 0;
let j = 1;
do {
    sum += j;
    j++;
} while (j <= 100);
console.log("Sum of numbers from 1 to 100:", sum);

// Prompt the user to enter a number greater than 10
let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10:"), 10);
} while (userInput <= 10);
console.log("You entered:", userInput);

// Create a simple guessing game
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
    if (guess !== correctNumber) {
        console.log("Wrong guess, try again!");
    }
} while (guess !== correctNumber);
console.log("Congratulations! You guessed the correct number:", correctNumber);