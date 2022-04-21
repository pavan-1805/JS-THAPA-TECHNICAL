console.log(`ASYNC-AWAIT`);

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let arr = [1, 2, 3, 4, 5];
    resolve(arr);
    // reject("REJECTED");
  }, 2000);
});

const getData = (rollNum) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (roll_Num) => {
        const data = {
          name: "pavan",
          age: 24,
        };
        resolve(`my ${roll_Num} and my data is ${data.name} ${data.age}`);
        // reject("NO DATA");
      },
      2000,
      rollNum
    );
  });
};

const func = async () => {
  const getRollNo = await prom1;
  console.log(getRollNo);

  const getDataaaa = await getData(getRollNo[0]);
  return getDataaaa;
};
const data = func().then((response) => {
  console.log(response);
})
.catch((error)=>{
    console.log(error);
})
