
function saySomething(message) {
    return message
}

//async functions
async function delay() {
    return "Hello" //Promise.resolve("Hello")
}

console.log(saySomething('start'))
// console.log(delay())
delay().then(res => console.log(res))
console.log(saySomething('going on'))
