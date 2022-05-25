const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        //apis 
        sayHello() {
            return 'Hello'
        },
        sayHai() {
            return 'Hai'
        },
        sayGreet() {
            return 'Greet'
        }

    }
})

async function main() {
    try {
        await broker.start()
        const hello = await broker.call('greeter.sayHello')
        const hi = await broker.call('greeter.sayHai')
        const greet = await broker.call('greeter.sayGreet')
        console.log(`${hello} ${hi} ${greet}`)
    }
    catch (err) {
        console.log(err)
    }
}
main()

