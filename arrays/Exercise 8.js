// Write a function similar to the oddLengths function from Exercise 6, but
// don't use map or filter. Instead, try to use the reduce method.

function oddLengths(array) {
  let newArray = [];

  array.reduce((accumulator, element) => accumulator + ((element.length % 2 === 1) ? newArray.push(element.length) : ''), '');
  
  return newArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(oddLengths(arr)); // => [1, 5, 3]
