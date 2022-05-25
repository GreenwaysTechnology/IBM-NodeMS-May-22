
const USERS = [{ id: 1, name: 'admin' }]
class UserService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000,USERS)
        })
    }
    create(user){
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000,USERS.concat(user))
        })
    }
}

module.exports = new UserService();