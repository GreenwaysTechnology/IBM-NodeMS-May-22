function add(a, b) {
    return a + b;
}
add(10, 10) //hardcoded values
let x = 100;
let y = 200;
add(x, y); // passing variables
//function as parameter

//callback is just variable
//connect is higher order function 
function connect(callback) {
    callback()
}
//pass function as parameter
connect(function () {
    console.log('connect')
});
let cb = function () {
    console.log('Connect')
};
connect(cb);
////////////////////////////////////////////////////////////////////////////////////

// function read(callback) {
//    let res =  callback('hello')
//    console.log(res)
// }
//annous style
// const read = function (callback) {
//     let res = callback('hello')
//     console.log(res)
// }
const read = callback => {
    let res = callback('hello')
    console.log(res)
}

// read(function (message = '') {
//     console.log(message)
//     return `${message} Subramanian`
// })

read((message = '') => {
    console.log(message)
    return `${message} Subramanian`
})

//passing more functions 

const login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success('Login Success')
    } else {
        failure('Login failed')
    }
}
login('admin', 'admin', message => console.log(message), err => console.log(err))
login('xxx', 'yyyy', message => console.log(message), err => console.log(err))














