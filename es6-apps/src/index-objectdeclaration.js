//object creation using functions 

function Employee() {
    //state  //instance variable
    this.id = 1;
    this.name = 'Subramanian'
    //behaviour //methods
    this.calculate = function () {
        return 1000
    }
}
//emp is reference variable
let emp = new Employee()//constructor call
console.log(`id ${emp.id} ${emp.name} ${emp.calculate()}`)

//es 6 class 
class Customer {
    id = 1;
    name = 'Subramanian'
    //behaviour //methods
    calculate() {
        return 1000
    }
}
let cust = new Customer()//constructor call
console.log(`id ${cust.id} ${cust.name} ${cust.calculate()}`)
