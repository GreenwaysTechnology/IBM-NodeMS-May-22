const http = require('http')
//create Server
const server = http.createServer((req, res) => {
    //send response
    res.write('Hello,Http')
    res.end();//terminate current request cycle
})

//Start Server
server.listen(3000,()=>{
    console.log(`Http Server is listening at ${server.address().port} ${server.address().address}`)
})