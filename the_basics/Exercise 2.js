/* Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

   thousands place is 4
   hundreds place is 9
   tens place is 3
   ones place is 6
*/

let myNumber = 4936;

let ones = myNumber % 10;
let tens = ((myNumber - ones) / 10) % 10;
let hundreds = (((myNumber - tens * 10) - ones) / 100) % 10;
let thousands = (((myNumber - hundreds * 100 - tens * 10) - ones) / 1000);

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);
