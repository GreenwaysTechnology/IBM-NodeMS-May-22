//object creation using functions 

function Employee(id = 1, name = 'Subramanian') {
    //state  //instance variable
    this.id = id;
    this.name = name
    //behaviour //methods
    this.calculate = function () {
        return 1000
    }
}
//emp is reference variable
let emp = new Employee(13, 'ram')//constructor call
console.log(`id ${emp.id} ${emp.name} ${emp.calculate()}`)

//es 6 class 
class Customer {
    //constructor 
    constructor(id = 1, name = 'Subramanian') {
        this.id = id
        this.name = name
    }
    //behaviour //methods
    calculate() {
        return 1000
    }
}
let cust = new Customer(4,'John')//constructor call
console.log(`id ${cust.id} ${cust.name} ${cust.calculate()}`)
