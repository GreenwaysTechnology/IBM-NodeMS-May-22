//express app. 
const express = require('express')

//create application object 
const app = express()

//api 
app.get('/', (req, res) => {
    res.end('Home Page')
})
app.get('/api/users', (req, res) => {
    res.status(200).json([{ id: 1, name: 'admin' }])
})
app.post('/api/users', (req, res) => {
    res.status(200).send('POST')
})
app.put('/api/users', (req, res) => {
    res.status(200).send('PUT')
})
app.delete('/api/users', (req, res) => {
    res.status(200).send('DELETE')
})

app.get('/api/customers', (req, res) => {
    res.status(200).json([{ id: 1, name: 'admin' }])
})
app.post('/api/customers', (req, res) => {
    res.status(200).send('POST')
})
app.put('/api/customers', (req, res) => {
    res.status(200).send('PUT')
})
app.delete('/api/customers', (req, res) => {
    res.status(200).send('DELETE')
})
//start server

let serverinfo = app.listen(3000, () => {
    console.log(`Express server is running @ ${serverinfo.address().port}`)
})