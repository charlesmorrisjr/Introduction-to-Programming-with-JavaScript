// Write a findIntegers function that takes an array argument and returns an
// array that contains only the integers from the input array. Use the filter
// method in your function.

/* Launch School solution

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

*/

function findIntegers(integerArray) {
  let newArray = [];

  integerArray.filter(num => (Number.isInteger(num)) && newArray.push(num));
  
  /*
  integerArray.filter(function(num) {
    if (Number.isInteger(num))
      newArray.push(num);
    })
  */

  return newArray;
}


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 