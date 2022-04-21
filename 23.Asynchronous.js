console.log(`ASYNCHRONOUS(no-waiting)`);
const func4 = () => {
  console.log(`function 4 started`);
  setTimeout(() => {
    console.log(`function 4 ended`);
  }, 5000);
};
const func3 = () => {
  //it wont wait for func4 to complete
  console.log(`function 3 started`);
  func4();
  console.log(`function 3 ended`);
};
func3();