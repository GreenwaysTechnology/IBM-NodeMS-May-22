const EventEmitter = require('events')


class ProductService extends EventEmitter {
    constructor() {
        super();
        //register listener 
        this.on('buy', (evt) => {
            console.log(evt)
        })
    }
    //biz method emits events
    buy(product) {
        //emitter
        this.emit('buy', product)
    }
}

function main() {
    let product = new ProductService();
    product.buy({ id: 1, name: 'phone', qty: 3, price: 1000 })
}
main()