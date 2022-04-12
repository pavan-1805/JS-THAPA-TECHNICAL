console.log("CALLBACK FUNCTIONS");
console.log(
  "Any function that is passed as an argumrnt to another function is known as callBcak functions"
);
console.log(
  "A CB is a func that is to be executed after another function has finished executing"
);
const func1 = () => {
    console.log("Im a FUN1, I'll be sending as a Argument to another Function");
}
const func2 = (string,cb) => {
    console.log(string);
   cb() 
}
func2('argument',func1)
