const { ServiceBroker } = require('moleculer')


const broker = new ServiceBroker({

    transporter: 'TCP',
    //service discovery configuration
    registry: {
        // discoverer: "redis://localhost:6379"
        strategy: "Random"
    }
})


broker.createService({
    name: 'greeter',
    actions: {
        sayGreet: {
            handler(ctx) {
                return "Hello"
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        await broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()