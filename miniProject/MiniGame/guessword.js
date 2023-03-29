class WordGuess {
    constructor(word) {
      this.word = word.toLowerCase();
      this.hiddenWord = this.hideWord(word);
      this.guesses = [];
      this.maxGuesses = 6;
      this.attempts = 0;
    }
  
    play() {
      while (this.hiddenWord.includes("_") && this.attempts < this.maxGuesses) {
        const guess = prompt(`Guess a letter (${this.maxGuesses - this.attempts} attempts left):`);
        if (guess === null) {
          alert("Goodbye!");
          break;
        }
        const guessLetter = guess.toLowerCase();
        if (guessLetter.length !== 1 || !/[a-z]/.test(guessLetter)) {
          alert("Please enter a single letter!");
          continue;
        }
        if (this.guesses.includes(guessLetter)) {
          alert("You've already guessed that letter. Please try a different one.");
          continue;
        }
        this.guesses.push(guessLetter);
        if (this.word.includes(guessLetter)) {
          this.updateHiddenWord(guessLetter);
          alert(`Good guess! The word now looks like this: ${this.hiddenWord}`);
        } else {
          this.attempts++;
          alert(`Sorry, the letter "${guessLetter}" is not in the word. You have ${this.maxGuesses - this.attempts} attempts left.`);
        }
      }
      if (this.hiddenWord.includes("_")) {
        alert(`Sorry, you didn't guess the word "${this.word}" in time. Better luck next time!`);
      } else {
        alert(`Congratulations! You guessed the word "${this.word}" in ${this.attempts} attempts.`);
      }
    }
  
    hideWord(word) {
      return word.split("").map(letter => letter === " " ? " " : "_").join("");
    }
  
    updateHiddenWord(guess) {
      const wordArray = this.word.split("");
      for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === guess) {
          this.hiddenWord = this.hiddenWord.substring(0, i) + guess + this.hiddenWord.substring(i + 1);
        }
      }
    }
  }
  
  const game = new WordGuess("hello world");
  game.play();
  