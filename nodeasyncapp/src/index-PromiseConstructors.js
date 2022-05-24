//Promise factory api 
function saySomething(message) {
    return message;
}

function delay() {
    //using explicit timer 
    return new Promise((resolve, reject) => {
        //async logic
        setTimeout(resolve, 5000, 'Hello,Promise Constructor')
    })
}
//logic with resolve and reject

function auth(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 2000, 'login success')
        } else {
            setTimeout(reject, 2000, 'login failed')
        }
    })
}

console.log(saySomething('start'));

delay().then(res => console.log(res))
auth('admin', 'admin')
    .then(status => console.log(status))
    .catch(err => console.log(err))
console.log(saySomething('going on'));

