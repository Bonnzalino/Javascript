const input = "turpentine and turtles";
const vowels = ['a','e','i','o','u'];
const resultArray =[];

for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    if (input[i].toLowerCase() === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i].toLowerCase() === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i].toLowerCase() === 'u') {
    resultArray.push(input[i]);
  }
}

console.log(resultArray);


resultString = resultArray.join('').toUpperCase();
console.log(resultString);