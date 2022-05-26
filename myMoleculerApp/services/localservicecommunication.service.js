const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

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

//adder
broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                return ctx.params.a + ctx.params.b
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