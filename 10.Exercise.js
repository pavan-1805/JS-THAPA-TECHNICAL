console.log("EXERCISE");
const a = 100;
const obj = {
  name: "pavan",
  age: 24,
};
const fun = (x, y) => {
  console.log(x, y);
  x = 1;
  y.name = "sai";
  console.log(x, y);
};
fun(a, obj);
console.log(a,obj.name);
