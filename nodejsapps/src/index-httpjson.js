const http = require('http')

const data = [{
    id: 1,
    name: 'admin'
}, {
    id: 2,
    name: 'guest'
}]


//create Server
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify(data))
    res.end();//terminate current request cycle
})

//Start Server
server.listen(3000, () => {
    console.log(`Http Server is listening at ${server.address().port} ${server.address().address}`)
})