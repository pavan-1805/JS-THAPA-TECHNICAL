console.log(
  "the mechanism where declaration of functions, variables or classes to the top of their scope, prior to execution of the code"
);
console.log('hoisting wont work on let and const declarations');
// add(5, 5);
// function add(a, b) {
//   console.log(a + b);
// }

a = 10;
// console.log(a);
var a;   //this will move to top of their scope which means before console



var b = 20
// console.log(b);
var b = 30
// console.log(b);



// console.log(c,d);
let c = 10;
const d = 10;




// example:
// console.log(p);
var p = 10;     //here 'var p' will move to top which means before log(p), p = 10 will be on this line



//EXERCISE:
console.log(pavan);
var pavan = 'global pavan'
console.log(pavan);

function func(){
    console.log(pavan);
    var pavan = 'function pavan'
    console.log(pavan);
}
func()