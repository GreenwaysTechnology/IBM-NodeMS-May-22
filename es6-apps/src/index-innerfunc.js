//how to return function from another function 

// function counter() {
//     //return anonmous function
//     return function () {
//         return 'counter'
//     }
// }

// const counter = () => {
//     return () => {
//         return 'counter'
//     }
// }
const counter = () => () => 'counter'

let func = counter()
console.log(func())
//
console.log(counter()())