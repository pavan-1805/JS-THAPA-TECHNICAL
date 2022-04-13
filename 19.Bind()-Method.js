console.log(`bind( ) method`);
console.log(`by using bind() method we can bind an object to a common function, 
so that the function gives diff result when its need`);
const obj1 = {
  name: "pavan",
  age: 24,
  func: function (param, param2) {
    console.log(`${this.name} and ${this.age}, ${param},, ${param2}`);
  },
};
obj1.func("extra parameter1", "extra parameter2");

const func1 = obj1.func;
func1("extra parameter1", "extra parameter2");

const withBind = obj1.func.bind(obj1); //obj1.func.bind(obj1) will give function, im storing that function in withBind variable
withBind("extra parameter1", "extra parameter2");



//making function common to all objects
const obj2 = {
  name: "sai",
  age: 25,
};
const obj3 = {
  name: "durga",
  age: 26,
};
const obj4 = {
  name: "kalyan",
  age: 27,
};
function pavan(param, param2) {
  console.log(`${this.name} and ${this.age}, ${param},, ${param2}`);
}
const binding2 = pavan.bind(obj2)
binding2("extra parameter1", "extra parameter2")
const binding3 = pavan.bind(obj3)
binding3("extra parameter1", "extra parameter2")
const binding4 = pavan.bind(obj4)
binding4("extra parameter1", "extra parameter2")