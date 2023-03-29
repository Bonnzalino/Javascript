//  Write a JavaScript program to calculate the factorial of a number.
let randomNumber = Math.floor(Math.random() *5);

function fact(n) {
    let result = 1;
    for (let i = n ; i >= 1 ; i--) {
        result = result * i;
    }
        return result;
}
console.log(6);
console.log(fact(6));