//read file using nonstreaming nonblocking api. 

const fs = require('fs')


function saySomething(msg) {
    console.log(msg)
}
const path = "./src/assets/info.txt"
const options = {
    encoding: 'utf-8'
}
saySomething('start')
fs.readFile(path, options, (err, data) => {
    if (err) throw err;
    console.log(data)
})
saySomething('going on')