//reutrn values
function sayHello() {
    return 'Hello'
}
console.log(sayHello())

function add(a = 0, b = 0) {
    return a + b;
}
console.log(add(1, 89))

function doStuff() {
    return; //undefined
}
console.log(doStuff() ? "Value" : "No Value")
