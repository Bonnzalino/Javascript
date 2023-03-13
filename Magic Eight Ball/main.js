let userName = "Bonnzalino";
userName ? console.log(`Hello, ${userName}`) : console.log(`Hello!`);

let userQuestion = "What is your Father's name";
console.log(`${userName} has asked : ${userQuestion}.`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(`${randomNumber}`);

//>>>>>>>>>>>>> Else If <<<<<<<<<<<<<<<<<<<<

// if (randomNumber === 1) {
//   console.log(`Magic ball says, 'It is certain'`);
// } else if (randomNumber === 2) {
//   console.log(`Magic ball says, 'It is decidedly so'`);
// } else if (randomNumber === 3) {
//  console.log(`Magic ball says, 'Reply hazy try again'`);
// } else if (randomNumber === 4) {
//   console.log(`Magic ball says, 'Cannot predict now'`);
// } else if (randomNumber === 5) {
//   console.log(`Magic ball says, 'Do not count on it'`);
// } else if (randomNumber === 6) {
//   console.log(`Magic ball says, 'My sources say no'`);
// } else if (randomNumber === 7) {
//   console.log(`Magic ball says, 'Outlook not so good'`);
// } else {
//   console.log(`Magic ball says, 'Signs point to yes'`);
// } 

let eightBall = "";

if (randomNumber === 1) {
  eightball = 'It is certain';
} else if (randomNumber === 2) {
  eightball = 'It is decidedly so';
} else if (randomNumber === 3) {
 eightball =  'Reply hazy try again';
} else if (randomNumber === 4) {
  eightball = 'Cannot predict now';
} else if (randomNumber === 5) {
  eightball = 'Do not count on it';
} else if (randomNumber === 6) {
  eightball = 'My sources say no';
} else if (randomNumber === 7) {
  eightball = 'Outlook not so good';
} else {
  eightball = 'Signs point to yes';
} 


// switch (randomNumber) {
//   case 0:
//     eightball = "It is certain";
//     break;
//   case 1:
//     eightball = "It is decidedly so";
//     break;
//   case 2:
//     eightball = "Reply hazy try again";
//     break;
//   case 3:
//     eightball = "Cannot predict now";
//     break;
//   case 4:
//     eightball = "Do not count on it";
//     break;
//   case 5:
//     eightball = "My sources say no";
//     break;
//   case 6:
//     eightball = "Outlook not so good";
//     break;
//   case 7:
//     eightball = "Signs point to yes";
//     break;
// }

console.log(`Magic ball says, ${eightball}`);


