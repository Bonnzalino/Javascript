const howManyLetters = () => {
    const pharse = 'What the hell is this javascript'
    for (letter in pharse) {
        console.log(letter)
    }
}
howManyLetters();