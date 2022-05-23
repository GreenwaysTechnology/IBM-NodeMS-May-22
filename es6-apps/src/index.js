//literals object 

const employee = {
    id: 1,
    name: 'subramanian',
    status: true
}
console.log(employee)

//literals objects and methods

let createApp = {
    name: 'MicroServices',
    // init: function () {
    //     console.log('init')
    // },
    init() {
        console.log('init')
    },
    destroy() {
        console.log('destroy')
    },

}
createApp.name
createApp.init()
createApp.destroy()

