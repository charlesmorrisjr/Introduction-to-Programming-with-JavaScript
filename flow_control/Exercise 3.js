// Let's improve our previous implementation of evenOrOdd. Add a validation
// check to ensure that the argument is an integer. If it isn't, the function
// should issue an error message and return.

function evenOrOdd(number) {
  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('Please enter an integer.');
  }
}

evenOrOdd("w");
