const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: 'TCP'
});




//GateWayService
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    //override ApiGateWayService properties
    settings: {
        routes: [{
            path: '/api',
            whitelist: [
                //Restrict to access only sayHello action
                "greeter.sayHello",
                //Restrict to access all actions in Greeter service
                //"greeter.*"
            ]
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