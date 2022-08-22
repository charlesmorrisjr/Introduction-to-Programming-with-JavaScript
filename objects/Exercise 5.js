// Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObject = Object.create(myProtoObj);

newObject.foobie = 3;

console.log(myProtoObj);
console.log(newObject);
console.log(newObject.foo);
