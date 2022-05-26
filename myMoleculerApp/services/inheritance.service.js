const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

//parent Services
const hello = {
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello,From Parent';
        }
    }
}
const hai = {
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai, From Parent'
        }
    }
}
//Child Service
broker.createService({
    name: 'greeter',
    mixins: [hello, hai],
    actions: {
        greet: {
            async handler(ctx) {
                return `${await this.actions.sayHai()} ${await this.actions.sayHello()}`
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