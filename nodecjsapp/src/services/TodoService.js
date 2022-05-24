const TODOS = require('../mock-data/todos')

class TodoService {
    constructor() {
        console.log('TodoService')
    }
    //sync api
    findAll() {
        return TODOS
    }
    //async api - callback based
    findAllAsyncCb(callback) {
        setTimeout(callback, 1000, TODOS)
    }
    //async api - promise based
    findAllAsyncPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS)
        })
    }
}

//return class 
// module.exports = TodoService
//return object 
module.exports = new TodoService()