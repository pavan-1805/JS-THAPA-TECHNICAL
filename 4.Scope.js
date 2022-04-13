console.log("SCOPE CHAIN");
console.log('LEXICAL ENVIRONMENT: Lexical Environment is the environment of the function where it is written. That is, the static order/place where it is situated, regardless from where it is called from. Scope of a variable/function is basically the locations from where a variable is visible/accessible');
var a = "pavan ";
const one = () => {
  var b = "sai ";
  second();

  function second() {
    var c = "durga ";
    console.log(a + b + c); //it has a,b and c vallues
    three();
  }
};
function three() {
  var d = "kalyan";
  console.log(a + d);
  console.log(a + b + c + d); //it has a and d values, it wont have b and c values
}
one();
