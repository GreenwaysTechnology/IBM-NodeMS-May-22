//router Object 
const express = require('express')
const userService = require('../services/user.service')
const userRouter = express.Router()

userRouter.get('/list', async (req, res) => {
    try {
        const users = await userService.findAll();
        res.status(200).json(users)
    }
    catch (err) {
        res.status(200).json(err)
    }

})
userRouter.get('/:id', (req, res) => {
    res.send(`user ${req.params.id}`)
})

// Without middleware
// userRouter.post('/save', (req, res) => {

//     let user = '';
//     req.on('data', chunk => {
//         user += chunk
//     })

//     req.on('end', async() => {
//         try {
//             console.log(user)
//             const users = await userService.create(JSON.parse(user));
//             console.log(users)
//             res.status(201).location("/api/users/save").json({ message: 'User Created' })
//         }
//         catch (error) {
//             res.status(500).json({ message: error })
//         }
//     });

// })

//with middleware : bodyParser middleware
userRouter.post('/save', async (req, res) => {
    try {
        const user = req.body
        const users = await userService.create(user);
        console.log(users)
        res.status(201).location("/api/users/save").json({ message: 'User Created' })
    }
    catch (error) {
        res.status(500).json({ message: error })
   }

})
userRouter.put('/update', (req, res) => {
    res.status(200).send('PUT')
})
userRouter.delete('/remove', (req, res) => {
    res.status(200).send('DELETE')
})

module.exports = userRouter;