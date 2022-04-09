console.log("THIS KEY WORD");
const a = 10;
console.log("global this:", this);
function Pavan() {
  console.log("regular function this:", this);
}
Pavan();
const sai = {
  name: "pavan",
  age: 24,
  funct: function () {
    console.log("regular function in object this:", this);
    console.log(this.name);
    function child() {
      const name = "kalyan";
      console.log("CHILD: ", name);
      console.log("CHILD this: ", this);
    }
    child();
  },
};
sai.funct();
