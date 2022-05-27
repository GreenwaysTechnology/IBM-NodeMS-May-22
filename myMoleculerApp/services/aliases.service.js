const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: 'TCP'
});

//http://localhost:3000/api/hello
//GateWayService
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    //override ApiGateWayService properties
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "hello": "greeter.sayHello",
                "hi": "greeter.sayHai",
                "greet": "greeter.sayGreet",
                "products": "products.list"
            }
        },
        {
            path: '/admin'
        }]
    }
})

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello!';
        },
        sayHai() {
            return 'Hai!';
        },
        sayGreet() {
            return 'Greeter!';
        }
    }
})

broker.createService({
    name: 'admin',
    actions: {
        getAdmin() {
            return 'Admin!';
        }
    }
})

async function main() {
    await broker.start();
}
main();