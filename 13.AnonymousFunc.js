console.log("ANONYMOUS FUNCTION");
console.log("A function without a name is known as Anonymous Function");
document.addEventListener('click',function () {
    console.log('CLICKED');    
})
const add = function (a,b) {
    console.log(a+b);    
}
add(2,3)