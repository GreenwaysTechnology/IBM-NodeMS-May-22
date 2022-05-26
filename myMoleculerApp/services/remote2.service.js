const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    nodeID: 'IBM-Adder Service',
    transporter: "nats://localhost:4222"
});

//adder
broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                return `${broker.nodeID} -> ${ctx.params.a + ctx.params.b}`
            }
        }
    }
})

async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();