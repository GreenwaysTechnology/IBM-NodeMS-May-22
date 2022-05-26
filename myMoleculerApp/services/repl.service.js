const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: { type: "number", positive: true, integer: true },
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                //return promise
                return new this.Promise((resolve,reject)=>{
                    setTimeout(resolve,5000,(ctx.params.a + ctx.params.b))
                });
            }
        }
    }
})



async function main() {
    try {
        await broker.start()
        console.log('Broker is Ready!')
        //Use Repl
        await broker.repl()
     
    }
    catch (err) {
        console.log(err)
    }
}
main()