
// async function getUser() {
//     return {
//         name: 'admin',
//         password: 'admin'
//     }
// }

function getUser() {
    return Promise.resolve({
        name: 'admin',
        password: 'admin'
    })
}

async function main() {
    try {
        const user = await getUser();
        console.log(user)
    } catch (err) {
        console.log(err)
    }
}
main()