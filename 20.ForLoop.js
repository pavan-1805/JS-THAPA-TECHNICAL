console.log("COMMON FOR LOOP");
const arr = [1, 2, 3, 4, 5, "pavan", "sai"];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

console.log("FOR-EACH LOOP");
arr.forEach((element, index, entireArray) => {
  console.log(`${element}, ${index},: ${entireArray}`);
});

console.log("FOR-OF LOOP");
for (const iterator of arr) {
  console.log(iterator);
}
for (const iterator of "pavan") {
  console.log(iterator);
}

console.log("FOR-IN LOOP");
console.log(
  `*****FOR-IN LOOP allows us to loop through the object to acces their keys, we cant loop through objects by using other for loop statements`
);
console.log(`in this case we are enumerating`);
const obj = {
  name: "pavan",
  name1: "sai",
};
for (const key in obj) {
  // console.log(key);
  if (Object.hasOwnProperty.call(obj, key)) {
    //if you want to see value
    const element = obj[key];
    console.log(`${key}: ${element}`);
  }
}
console.log('=======================================');
const divTag = document?.getElementById('pavan').getElementsByTagName('input')
// console.log(divTag.getElementsByTagName('input'));
// const inputTag = divTag.getElementsByTagName('input')
// console.log('length:',inputTag.length);
console.log(divTag);
console.log(typeof divTag);
// for (const key in inputTag) {
//     const element = inputTag[key];
//     console.log(`${key}: ${element}`);
// }

