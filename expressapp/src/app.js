//express app. 
const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routers/users.router')
const morgan = require('morgan')

//create application object 
const app = express()

//Register Body parsers
// parse application/json
app.use(bodyParser.json())
app.use(morgan('tiny'))


//binding routers with App 
app.use('/api/users', userRouter)


//global routing/home page 
app.get('/', (req, res) => {
    res.status(200).json({ page: 'HOME PAGE' })
})


//start server

let serverinfo = app.listen(3000, () => {
    console.log(`Express server is running @ ${serverinfo.address().port}`)
})