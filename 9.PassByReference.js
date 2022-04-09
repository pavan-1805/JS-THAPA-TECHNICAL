console.log("PASS BY REFERENCE: applicable only for non-primitive data types");
console.log("It will change in both objects");
const obj1 = {
  name: "pavan",
  age: 24,
};
let obj2 = obj1;
console.log("BEFORE UPDATE");
console.log(obj1);
console.log(obj2);
obj2.age = 25;
console.log("AFTER UPDATE");
console.log(obj1);
console.log(obj2);

//ARRAYS
const arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("BEFORE UPDATE");
console.log(arr1);
console.log(arr2);
arr2.push(5);
console.log("AFTER UPDATE");
console.log(arr1);
console.log(arr2);
