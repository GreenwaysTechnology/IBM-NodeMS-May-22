const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker({
  //  transporter:"TCP"
  transporter: "nats://localhost:4222"

});

//math 
broker.createService({
    name: 'math',
    actions: {
        add: {
            handler(ctx) {
                //service calls 
                return ctx.call('adder.add', { a: ctx.params.a, b: ctx.params.b })
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