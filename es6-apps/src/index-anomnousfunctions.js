//function declaration syntax.

//way 1
function sayHello() {
    return 'hello'
}
console.log(sayHello())

//function literals : funcitions are values like numbers,strings

let a = 10; // 10 value , a is variable
//function is value can be assigned to variable
//myfun is variable hold function,
//function without name is called anonmous function 
let myfun = function () {
    console.log('Hello Anonmous ')
};
//call function with myFun variable
myfun()

let add = function (a = 0, b = 0) {
    return a + b
};
console.log(add(12,12))
