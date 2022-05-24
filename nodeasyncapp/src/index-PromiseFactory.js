    //Promise factory api 


    function saySomething(message) {
        return message;
    }

    function delay() {
        return Promise.resolve('Hello,I am promise')
    }
    //logic with resolve and reject

    function auth(userName, password) {
        if (userName === 'admin' && password === 'admin') {
            return Promise.resolve('login success')
        }
        return Promise.reject('Login failed')
    }

    console.log(saySomething('start'));

    delay().then(res => console.log(res))
    auth('admin','admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))

    console.log(saySomething('going on'));

