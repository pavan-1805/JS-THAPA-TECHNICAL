console.log(`PROMISES`);
console.log(
  "promises has ejector function which accepts two values (resolve and reject), if promise fullfilled it reloves if not means its rejected. will resolve call 'then' block reject call 'catch' block"
);
const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let arr = [1, 2, 3, 4, 5];
    resolve(arr);
    // reject("REJECTED");
  }, 2000);
});

const getData = (rollNum) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(
      (roll_Num) => {
        const data = {
          name: "pavan",
          age: 24
        };
        resolve(`my ${roll_Num} and my data is ${data.name} ${data.age}`);
        // reject("NO DATA");
      },
      2000,
      rollNum
    );
  })
}

// promise
//   .then((response) => {
//     console.log("RESPONSE:", response);
//     getData(response[1])
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   });

// .................OR.............

prom1.then((response)=>{
  console.log(response);
  return getData(response[0])
})
.then((response)=>{
  console.log(response);
})
.catch((error)=>{
  console.log(error);
})
