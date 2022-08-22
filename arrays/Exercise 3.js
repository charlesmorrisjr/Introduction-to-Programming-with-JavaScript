// Let's make the problem a little harder. In this problem, we're again
// interested in even numbers, but this time the numbers are in nested arrays in
// a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

/*
myArray.forEach(function(index) {
  for (let i = 0; i < index.length; i++) {
    if (!(index[i] % 2)) {
      console.log(index[i]);
    }
  }
});
*/

myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(index) {
    if (!(index % 2)) {
      console.log(index);
    }
  })
});
