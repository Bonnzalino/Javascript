// const numbers =['apple','banana','orange','pineapple'];
// //filter only positive numbers
// const filtered = numbers.filter(n => n !== 'apple');    //if it match with this then add to new array
// console.log(filtered);

randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
    return num < 250;
  });
  console.log(smallNumbers);