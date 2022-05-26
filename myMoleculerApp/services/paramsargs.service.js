const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker();

broker.createService({
    name: 'hello',
    actions: {
        sayHello(ctx) {
            console.log(ctx)
            console.log(ctx.params)
            return `Hello ${ctx.params.name}`
        },
        //handler -meta pattern
        sayGreet: {
            handler(ctx) {
                return `Greet ${ctx.params.name}`
            }
        }
    }
})



async function main() {
    try {
        await broker.start()
        const res = await broker.call('hello.sayHello', { name: 'Subramanian' })
        console.log(res)
        const res1 = await broker.call('hello.sayGreet', { name: 'Subramanian' })
        console.log(res1)

    }
    catch (err) {
        console.log(err)
    }
}
main()