const { ServiceBroker } = require('moleculer')


const broker = new ServiceBroker({
  //  transporter:"TCP"
  transporter: "nats://localhost:4222",
  serializer: "JSON" // not necessary to set, because it is the default

});

//math 
broker.createService({
    name: 'customer',
    actions: {
        list: {
            handler(ctx) {
                //service calls 
                return ctx.call('product.list')
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