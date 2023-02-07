// Задача 1

// let order = { 
//     productName: "Велосипед", 
//     costomerName: "Саша", 
//     salesName: "Петя", 
//     totalPrice: 15000 
//     } 

// Решение 1
// const descriptor = []

// for (const key in obj = Object.getOwnPropertyDescriptor(order, 'totalPrice')) {
//         const element = [key, obj[key]];
//         descriptor.push(element);
// }

// Решение 2
// const descriptor = Object.entries(Object.getOwnPropertyDescriptor(order, 'totalPrice'));

// Задача 2

// let employees = { 
//     firstName: "Петя", 
//     lastName: "Иванов", 
//     ratePerDay: 2500, 
//     workingDays: 5, 
//     getSalary() { console.log(employees.ratePerDay * employees.workingDays )} } 

//     let propertyNames = [];
//     for (let property in employees) {
//       if (typeof employees[property] !== 'function') {
//         propertyNames.push(property);
//       }
//     }


//     console.log(propertyNames.join(', '));

// Задача 3

// class Delivery {
//     constructor(name, phone){
//         this.name = name;
//         this.phone = phone;
//         this.validPhone = phone[0] === "+";
//     }
// }

// let deliveryName = new Delivery("Pizza", "81234567890")
// console.log(deliveryName.validPhone);

// Задача4

// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }

// class User extends Permissions{
//     constructor(name){
//         super()
//         this.name = name
//     }
// }