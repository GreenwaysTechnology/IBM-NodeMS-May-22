const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//service definition
broker.createService({
    name: 'hello',
    actions: {
        //apis 
        sayHello() {
            return 'Hello'
        }
    }
})

//start the container
// function main() {
//     broker.start().then(() => {
//         console.log('Service Broker is Ready!')
//         //call service
//         broker.call('hello.sayHello').then(res => {
//             console.log(res)
//         }).catch(err => {
//             console.log(err)
//         })

//     }).catch(err => console.log(err))
// }
async function main() {
    try {
        await broker.start()
        const res = await broker.call('hello.sayHello')
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()

