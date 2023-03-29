//Write a JavaScript program to find the largest of three given integers.

// if standalone
function findLargest(num1, num2, num3) {
    let largest = num1;

    if(num1 < num2) {
        largest = num2;
    }
    if(num2 < num3) {
        largest = num3;
    }
    return largest;
}

console.log(findLargest(4, 2, 9));

// if - else
function findLarger(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        largest = num1;
    } else if (num2 > num1 && num2 > num3){
        largest = num2;
    } else {
        largest = num3;
    }
    return largest;
}

console.log(findLarger(4, 12, 9));

//nested if
function findLarge(num1, num2, num3) {
    if (num1 > num2){
        if (num1 > num3) {
            largest = num1;
        } else {
            largest = num3;
        }
    } else {
        if (num2 > num3) {
            largest = num2;
        } else {
            largest = num3;
        }
    }
    return largest;
}

console.log(findLarge(4, 12, 29));