console.log(`apply( ) method`);
console.log(`apply() is almost similar to call() method`);
console.log(`the difference is :
the call() takes arguments separately
the apply() takes arguments as an array`);

const obj1 = {
  name: "pavan",
  age: 24,
  func: function (param, param2) {
    console.log(`${this.name} and ${this.age}, ${param},, ${param2}`);
  },
};
obj1.func("extra parameter1", "extra parameter2");

const obj2 = {
  name: "sai",
  age: 25,
};
obj1.func.apply(obj2, ["extra parameter1", "extra parameter2"]);


const maxVal = Math.max(1,2,3,4)
console.log(maxVal);

const maxVal1 = Math.max.apply(null,[1,2,3,4])   //in the form of Array
console.log(maxVal1);