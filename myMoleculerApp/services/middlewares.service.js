const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const PRODUCTS = require('../mock-data/products')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require("helmet");

const broker = new ServiceBroker();

broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            rest: "GET /",
            handler(ctx) {
                return PRODUCTS;
            }
        },
        //GET product by id
        get: {
            rest: "GET /:id",
            handler(ctx) {
                console.log(ctx.params)
                return PRODUCTS.filter(product => product.id == ctx.params.id)
            }
        },
        //save
        create: {
            rest: "POST /",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product Created'
            }
        },
        //update
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
        },
        //delete
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
        }
    }
})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        //global middlewares
        use: [
            cookieParser(),
            helmet()
        ],

        routes: [{
            path: '/api',
            use: [
                compression()
            ],
            aliases: {
            },
            autoAliases: true
        }]
    }
})


async function main() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
main()

