Array.prototype.newProperty = 5;
const numbers = [2, 4, 6, 8];
for (const number in numbers) {
    console.log(number);
}