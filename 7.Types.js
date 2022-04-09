console.log("TYPES");
console.log(
  "PRIMITIVE DATA TYPES: Number, String, Boolean, Undefined, Null, Symbol   => it has value"
);
console.log("NON PRIMITIVE DATA TYPES: Objects  => it is a reference");

let a = 10;
let b = "pavan";
let c = true;
let d;
let e = null;
let f = "";
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

const details = {
  name: "pavan",
  age: 24,
  value: null,
};
details.degree = "Btech";
console.log(details);
console.log(typeof {}); //OBJECT
console.log(typeof []); //OBJECT

console.log(typeof function name(params) {});

const func = () => {};
console.log(typeof func);

//ARRAY IS AN OBJECT
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(typeof arr);

const arrObj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
};
console.log(arrObj);
//CHECKING WHETHER ARRAY IS ARRAY OR NOT
console.log(Array.isArray(arr));
console.log(Array.isArray(arrObj));