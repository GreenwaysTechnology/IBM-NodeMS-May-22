//callback chaining

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
// newUser = null
// getUser(newUser, user => {
//     console.log(user)
//     //login
//     login(user, status => {
//         console.log(status)
//         //dashboard
//         dashboard(status, adminPage => {
//             console.log(adminPage)
//         }, guestPage => {
//             console.log(guestPage)
//         });
//     }, err => {
//         console.log(err)
//     })
// }, err => {
//     console.log(err)
// })

getUser(newUser).then(user => {
    console.log(user)
    login(user).then(status => {
        console.log(status)
        dashboard(status).then(adminPage => console.log(adminPage)).catch(errorPage => {
            console.log(errorPage)
        })
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
});





