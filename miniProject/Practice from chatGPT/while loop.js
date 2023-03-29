// 'while' loop practice:
// Write a function that takes in a positive integer and returns the factorial of that number. (Factorial is the product of all positive integers up to and including the number itself.)

function getFactorial() {

let random = Math.floor(Math.random() *7) + 1;
console.log(random);

let factorial = 1;

while (random > 0) {
    factorial = factorial * random;
    random--;
} return factorial;
    
}
ff= getFactorial();
console.log(ff);
