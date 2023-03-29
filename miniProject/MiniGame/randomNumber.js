const prompt = require('prompt-sync')(); // import the prompt-sync module

// generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = Number(prompt('Guess a number between 1 and 100: '));
  attempts++;

  if (isNaN(guess)) {
    console.log('Invalid input. Please enter a number.');
  } else if (guess < secretNumber) {
    console.log('Too low!');
  } else if (guess > secretNumber) {
    console.log('Too high!');
  }
}

console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
