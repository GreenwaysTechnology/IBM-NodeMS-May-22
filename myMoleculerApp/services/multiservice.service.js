const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//hello Service
broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello'
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai'
        }
    }
})

broker.createService({
    name: 'greeter',
    actions: {
        sayGreet() {
            return 'Greet'
        }

    }
})
async function main() {
    try {
        await broker.start()
        const hello = await broker.call('hello.sayHello')
        const hi = await broker.call('hai.sayHai')
        const greet = await broker.call('greeter.sayGreet')
        console.log(`${hello} ${hi} ${greet}`)

    }
    catch (err) {
        console.log(err)
    }
}
main()

