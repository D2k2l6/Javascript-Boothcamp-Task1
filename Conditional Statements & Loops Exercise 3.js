// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Calculate the sum of all numbers from 1 to 100 and print the result
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

// Given the array of numbers, print each element to the console
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(number => console.log(number));

// Given the array of numbers, find and print the largest number
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
numbers2.forEach(number => {
    if (number > largest) {
        largest = number;
    }
});
console.log("Largest number:", largest);