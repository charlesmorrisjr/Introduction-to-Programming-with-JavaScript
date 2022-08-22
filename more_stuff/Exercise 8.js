// This exercise has nothing to do with this chapter. Instead, it uses concepts
// you learned earlier in the book. If you can't figure out the answer, don't
// worry: this question can stump developers with more experience than you have.
// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN
// value, false otherwise. You can also use Object.is(value, NaN) to make the
// same determination. Without using either of those methods, write a function
// named isNotANumber that returns true if the value passed to it as an argument
// is NaN, false if it is not.

function isNotANumber(num) {
  
  return num !== num;

  /* First way to check: trying to subtract from a string will return NaN.
  // If the operation succeeds, the argument is a number.

  if (number - 0) {
    return false;
  } else {
    return true;
  }

  */
  
  /* Alternative method using a regular expression:

  if (/[^0-9,-]/.test(num)) {
    return true;
  } else {
    return false;
  }

  */
}


console.log(isNotANumber(5654));
console.log(isNotANumber('Not a number'));
console.log(isNotANumber(NaN));
