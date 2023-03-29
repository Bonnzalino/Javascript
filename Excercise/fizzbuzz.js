function fizzbuzz(n) {
  // Write your code here
  let result = [];
  for(let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0){
      result.push('FizzBuzz');
    } else if  (i % 3 === 0){ 
      result.push('Fizz');
    } else if  (i % 5 === 0){
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result ;
}
console.log(fizzbuzz(16));
