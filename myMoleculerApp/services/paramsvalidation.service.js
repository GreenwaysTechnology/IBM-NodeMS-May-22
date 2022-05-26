const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {
        //validation
        add: {
            params: {
                a: { type: "number", positive: true, integer: true },
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                return ctx.params.a + ctx.params.b
            }
        }
    }
})



async function main() {
    try {
        await broker.start()
        const res = await broker.call('math.add', { a: 10, b: 20 })
        console.log(`The Add Result is ${res}`)

        //const res1 = await broker.call('math.add', { a: 10.78, b: 20 })
        //const res1 = await broker.call('math.add', { a: '10', b: 20 })

        const res1 = await broker.call('math.add', { a: 10, b: 20 })

        console.log(`The Add Result is ${res1}`)

    }
    catch (err) {
        console.log(err)
    }
}
main()