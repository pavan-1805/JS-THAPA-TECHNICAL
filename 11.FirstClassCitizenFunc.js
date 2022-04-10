console.log("FIRST CLASS CITIZEN FUNCTION");
console.log(
  "FIRST CLASS CITIZEN FUNCTION is a function will do following things in a programming language"
);
console.log('1. Assigning to a variable');
console.log('2. Sending function as a parameter');
console.log('3. Returning a function');


//1. Assigning to a variable
const funct1 = function () {
    console.log('Assigning to a variable');    
}
funct1()


//2. Sending function as a parameter
const funcParam = () => {
    return 'hi'
}
const funct2 = (fun,val) => {
    console.log('Sending function as a parameter:'+ ' '+fun()+' '+val);
}
funct2(funcParam,'pavan')


//3. Returning a function
const funct3 = () => {
    return function () {
        console.log('Returning a function');        
    }
}
funct3()()
//OR
const callFunct3 = funct3()
callFunct3()