const { ServiceBroker } = require('moleculer')
const products = require('../mock-data/products')

const broker = new ServiceBroker({
    // transporter: "nats://localhost:4222",
    transporter:'TCP',
    serializer: "JSON" // not necessary to set, because it is the default

});

//adder
broker.createService({
    name: 'products',
    actions: {
        list: {
            handler(ctx) {
                return products
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