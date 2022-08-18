// Modify the age.js program you wrote in the exercises for the Input/Output
// chapter. The updated code should use a for loop to display the future ages.

let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('What is your age? '));

for (i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`)
}
