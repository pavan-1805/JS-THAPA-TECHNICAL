console.log(`SYNCHRONOUS = ONE AFTER ONE = IT WILL WAIT`);

console.log(`SYNCHRONOUS(waiting)`);

const func2 = () => {
  console.log(`function 2 started`);
  console.log(`function 2 ended`);
};
const func1 = () => {
  //depending on func2
  console.log(`function 1 started`);
  func2();
  console.log(`function 1 ended`);
};
func1();
console.log('====================================OR===================================');
const funcB = () => {
  console.log(`function 2 started`);
  const date = new Date().getTime();
  while (new Date().getTime() - date < 5000); //it will wait for 5 seconds
  console.log(`function 2 ended`);
};
const funcA = () => {
  //depending on func2 to completion of its execution
  console.log(`function 1 started`);
  funcB();
  console.log(`function 1 ended`);
};
funcA();