const a = 'pavan';
const func1 = () => {
    const b = '1st console'
    console.log(b);
    debugger
    func2();
    console.log('consoling at last');
}
const func2 = () =>{
    debugger
    const c = 'durga';
    console.log('2nd consle')
    func3()
}
const func3 = () => {
    debugger
    console.log('3rd console');
}
console.log(this);
debugger;
func1()