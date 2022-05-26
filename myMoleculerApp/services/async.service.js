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
        const res = await broker.call('math.add', { a: 10, b: 20 })
        console.log(`The Add Result is ${res}`)
     
    }
    catch (err) {
        console.log(err)
    }
}
main()