//function args and parameters

//name is arg
function sayHello(name) {
    console.log(`Hello ${name}`)
}
sayHello('Subramanian') //parameters
sayHello() // parameter would be undefined

//default args 
function multiply(a = 0, b = 0) {
    let c = a * b
    console.log(`The Result is ${c}`)
}
multiply(10, 10)
multiply()