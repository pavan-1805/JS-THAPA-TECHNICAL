console.log(`call( ) method`);
console.log(
  `the call() method is predefined java script method. with call(), an object can use a method belonging to another object`
);
const obj1 = {
  name: "pavan",
  age: 24,
  func: function (param,param2) {
    console.log(`${this.name} and ${this.age}, ${param},, ${param2}`);
  },
};
obj1.func('extra parameter1','extra parameter2');

const obj2 = {
  name: "sai",
  age: 25
};
obj1.func.call(obj2,'extra parameter1','extra parameter2')