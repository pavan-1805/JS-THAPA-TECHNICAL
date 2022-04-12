console.log("HIGHER ORDER FUNCTION");
console.log(
  "HOF are functions that take other functions as arguments or return a function as their result"
);
const func = (name) => {
    if(name==='pavan'){
        return function (age) {
            console.log(`Hi ${name}, your age is ${age}`);            
        }
    }
    if(name==='sai'){
        return function (age) {
            console.log(`Hi ${name}, your age is ${age}`);            
        }
    }
    if(name==='durga'){
        return function (age) {
            console.log(`Hi ${name}, your age is ${age}`);            
        }
    }
    if(name==='kalyan'){
        return function (age) {
            console.log(`Hi ${name}, your age is ${age}`);            
        }
    }
}
func('pavan')(23)
func('sai')(24)
func('durga')(25)
func('kalyan')(26)