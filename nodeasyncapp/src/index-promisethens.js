const getUser = user => {
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { err: 'User Not Found' })
        }
    })
}

const login = user => {
    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}


const dashboard = status => {
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to Admin')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest')
        }
    })

}

//call api 
let newUser = {
    name: 'admin',
    password: 'admin'
}
// getUser(newUser).then(user => {
//     console.log(user)
//     login(user).then(status => {
//         console.log(status)
//         dashboard(status).then(adminPage => console.log(adminPage)).catch(errorPage => {
//             console.log(errorPage)
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// }).catch(err => {
//     console.log(err)
// });

// getUser(newUser)
//     .then(user => {
//         console.log(user)
//         return login(user)
//     })
//     .then(status => {
//         console.log(status)
//         return dashboard(status)
//     }).then(page => {
//         console.log(page)
//     })
//     .catch(err => {
//         console.log(err)
//     })

getUser(newUser)
    .then(user => login(user))
    .then(status => dashboard(status)).then(page => console.log(page))
    .catch(err => console.log(err))





