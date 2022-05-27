const { ServiceBroker } = require('moleculer');
const ApiGateWay = require('moleculer-web')
const products = require('../mock-data/products')

const broker = new ServiceBroker({
    transporter: 'TCP'
})

//GateWayService
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})

//http://localhost:3000/greeter/sayHello
//rpc service : Holding biz logic
broker.createService({
    name: 'greeter',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello GateWay Service'
            }
        }
    }
})


async function main() {
    await broker.start();
}
main();

