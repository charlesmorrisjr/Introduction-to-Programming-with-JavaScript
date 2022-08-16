/*
  Write a program that uses a multiply function to multiply two numbers and
  returns the result. Ask the user to enter the two numbers, then output the
  numbers and result as a simple equation.
*/

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);

  return number;
}

multiply = (operand1, operand2) => operand1 * operand2;

/*
function multiply(operand1, operand2) {
  return operand1 * operand2;
}
*/

let numberOne = getNumber('Enter the first number: ');
let numberTwo = getNumber('Enter the second number: ');

console.log(`${numberOne} * ${numberTwo} = ${multiply(numberOne, numberTwo)}`);
