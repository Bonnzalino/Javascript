//Write a JavaScript program to check whether a given string is palindrome or not.

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  