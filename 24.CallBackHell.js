console.log(`Call Back`);

// 1.display any number as a roll number after 2 seconds
// 2.display name and age after 2 seconds
// 3.display gender after 2 seconds



const getData = () => {
    setTimeout(() => {
        const rollNo = [1,2,3,4,5]
        console.log(rollNo);
        setTimeout((rollNum) => {
            const data = {
                name: 'pavan',
                age: 24
            }
            console.log(`${rollNum}: ${data.name}, ${data.age}`);
            setTimeout((studentData) => {
                studentData.gender = 'male'
                console.log(`${rollNum}: ${studentData.name}, ${studentData.age}, ${studentData.gender}`);
            }, 2000,data);
        }, 2000,rollNo[1]);
    }, 2000);
}
getData()