// const TodoService = require('./services/TodoService')
const todoService = require('./services/TodoService')


async function main() {
    // let todoService = new TodoService()
    //sync api call
    console.log(todoService.findAll())
    //async api using callbacks
    todoService.findAllAsyncCb(todos => console.log(todos))
    //async api using Promises
    todoService.findAllAsyncPromise().then(todos => console.log(todos))

    //using async await
    try {
        const todos = await findAllAsyncPromise();
        console.log(todos)
    }
    catch (err) {

    }
}
main()