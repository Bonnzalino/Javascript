//Write a function that takes an array of numbers as an argument and returns the average of the numbers.



const median = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total / arr.length;
}

console.log(median([2,4,6,8,10]));