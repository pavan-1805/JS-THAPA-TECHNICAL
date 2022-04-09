console.log("SCOPE CHAIN");
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
