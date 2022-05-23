//arrow functions

// let myfun = function () {
//     console.log('Hello Anonmous ')
// };
// myfun()
let myfun = () => {
    console.log('Hello Arrow ')
};
myfun()
//if function has only one line of body of code , we can remove {}

myfun = () => console.log('Hello Arrow ');
myfun()
//args and parameters
let add = (a = 0, b = 0) => {
    return a + b;
}
console.log(add(1, 90))
//if function has only one line of code with return statement 
//remove { } and remove return statement
add = (a = 0, b = 0) => a + b
console.log(add(1, 90))

//if function has single parameter without default value 
//you can remove ()
let greet = name => name
console.log(greet('Subramanian'))


