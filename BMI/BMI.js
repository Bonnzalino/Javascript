let weight = prompt(`weight`);
let height = prompt(`height`);

function bmi(weight, height) {
    return weight / ((height/100)*(height/100));
}

 const urbmi = bmi(weight, height);
 
 if (urbmi < 18.5) {
    console.log(`Your BMI is ${urbmi} and you have an underweight`);
 } else if (24.9 > urbmi && urbmi > 18.5) {
    console.log(`Your BMI is ${urbmi} and you have a healthy weight`);
 } else if (25 < urbmi && urbmi < 29.9) {
    console.log(`Your BMI is ${urbmi} and you have an overweight`);
 } else {
    console.log (`Your BMI is ${urbmi} เจ้าอ้วนนนนนนน`);
 }