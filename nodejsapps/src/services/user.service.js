
const data = [{
    id: 1,
    name: 'admin'
}, {
    id: 2,
    name: 'guest'
}]

class UserService {
    constructor() {

    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, JSON.stringify(data));
        })
    }
}

module.exports = new UserService();