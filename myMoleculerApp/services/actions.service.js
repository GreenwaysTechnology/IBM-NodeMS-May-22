const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        //way 1
        sayHello() {
            return 'Hello'
        },
        //way -2
        sayHai: {
            handler() {
                return 'Hai'
            }
        }
    }
})

async function main() {
    try {
        await broker.start()
        const hello = await broker.call('greeter.sayHello')
        const hi = await broker.call('greeter.sayHai')
        console.log(`${hello} ${hi}`)
    }
    catch (err) {
        console.log(err)
    }
}
main()

