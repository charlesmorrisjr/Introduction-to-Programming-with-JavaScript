// Write a function similar to the oddLengths function from Exercise 6, but
// don't use map or filter. Instead, try to use the reduce method.

function oddLengths(array) {

    let stringLengths = array.map(contents => contents.length);
    return stringLengths.filter(num => num % 2);

  /* Alternate one-line solution:
      return array.map(contents => contents.length).filter(num => num % 2)
  */

}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr)); // => [1, 5, 3]
