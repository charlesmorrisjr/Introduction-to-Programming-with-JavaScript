/*
  Take a look at this code snippet:
  What does this program log to the console? Why?
*/

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);