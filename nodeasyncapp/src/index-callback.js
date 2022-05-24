//async code with timer -  setTimeout 

// function sayGreet(callback) {
//    callback();
// }
// sayGreet(function () {
//     console.log('Hello')
// })

function saySomething(message) {
    return message
}
// function delay(callback, timeout) {
//     setTimeout(callback, timeout)
// }
const delay = (callback, timeout) => setTimeout(callback, timeout, 'Hello,I am delayed')

console.log(saySomething('start'))
delay(data => console.log(data), 1000)
console.log(saySomething('going on'))


