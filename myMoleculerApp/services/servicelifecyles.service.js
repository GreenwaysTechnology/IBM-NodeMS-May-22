const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    //public methods
    actions: {
        add: {
            params: {
                a: { type: "number", positive: true, integer: true },
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                //call private method
                return this.add(ctx)
            }
        },
        multiply: {
            params: {
                a: { type: "number", positive: true, integer: true },
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                //call private method
                return this.multiply(ctx)
            }
        }
    },
    //private methods
    methods: {
        add(ctx) {
            return ctx.params.a + ctx.params.b
        },
        multiply(ctx) {
            return ctx.params.a * ctx.params.b
        }
    },
    //Life cycle methods
    created() {
        console.log('Service Created')
    },
    merged() {
        // Fired after the service schemas merged and before the service instance created
        console.log('Service merged')
    },

    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        console.log('Service started')
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        console.log('Service stoped')
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