// Earlier, we learned that JavaScript has multiple versions of the numeric
// value zero. In particular, it has 0 and -0. These numbers, while being
// mathematically nonsensical, are distinct values in JavaScript. We won't get
// into why JavaScript has a 0 and -0, but it can be useful in some cases.
// There's a problem, however: JavaScript itself doesn't seem to realize that
// the values are distinct: There are other ways to detect a -0 value. Without
// using Object.is, write a function that will return true if the argument is
// -0, and false if it is 0 or any other number.

function isNegativeZero(num) {
  
  return /-0/.test(num);

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


console.log(isNegativeZero(5654));
console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero('Text'));
