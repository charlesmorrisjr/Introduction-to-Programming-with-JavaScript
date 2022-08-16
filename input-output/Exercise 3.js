/*
  Modify the age.js program you wrote in the exercises for the Variables
  chapter. The updated code should ask the user to enter their age instead of
  hard-coding the age in the program.
*/

let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('What is your age? '));

console.log(`In 10 years, you will be ${age + 10} years old.`)
console.log(`In 10 years, you will be ${age + 20} years old.`)
console.log(`In 10 years, you will be ${age + 30} years old.`)
console.log(`In 10 years, you will be ${age + 40} years old.`)