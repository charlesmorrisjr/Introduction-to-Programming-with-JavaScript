// Create an array from the keys of the object obj below, with all of the keys
// converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArray = Object.keys(obj);

newArray = newArray.map(letter => letter.toUpperCase());

/* Alternate solution

for (index in newArray) {
  newArray[index] = newArray[index].toUpperCase();
}

*/

console.log(obj);
console.log(newArray);
