const http = require('http')
const userService = require('./services/user.service')

//create Server
const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    try {
        const users = await userService.findAll()
        res.end(users);
    }
    catch (err) {
        res.end(err)
    }
})

//Start Server
server.listen(3000, () => {
    console.log(`Http Server is listening at ${server.address().port} ${server.address().address}`)
})