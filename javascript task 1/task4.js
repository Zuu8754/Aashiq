// task 1 basic function

function welcomeUser(name) {
    console.log("Welcome" + name);
}
welcomeUser(" Aashiq");

// parameter + return

// function squareNumber(num) {
//     return num * num;
// }
// let result = squareNumber(5);
// console.log(result);



// object function

// let employee = {
//     name:"Aashiq ",
//     salary: 50000
// };

// function employeeBonus(wmp,bonus) {
//     let totalSalary = employee.salary + bonus;
//     return employee.name + "" + totalSalary;
// }
// let result = employeeBonus(employee, 5000);
// console.log(result);


// scope checking

// function testScope() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     } 

//     console.log("inside function:");
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// testScope();

// console.log("Outside function:");
// console.log(a);
// console.log(b);
// console.log(c);

// arrow function

const add = (a, b) => {
    console.log(a + b);
};

add(5,3);

// callback function

// function multiply(a,b) {
//     return a * b;
// }
// function calculator(callback, num1, num2,){
//     return callback(num1, num2);

// }

// let result = calculator(multiply, 5, 2);
// console.log(result);
 

// generator function

function* offers() {
    yield "50% OFF";
    yield "free delivery";
    yield "Cashback";
}

const gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// default parameter

// class student {
//     constructor(name, course = "JavaScript") {
//         this.name = name;
//         this.course = course;
//     }
// }

// const student1 = new student("akash");
// console.log(student1.name);
// console.log(student2.course);

// const student2 = new student("mothish", "python");
// console.log(student2.name);
// console.log(student2.course);

// currying
function multi(a) {
    return function(b){
        return function(c){
            return a * b * c;
        } 
    }
}

console.log(multi(2)(3)(4));

// spread operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = [...arr1, ...arr2];
// console.log(result);

// object spread

const obj1 = {name: "Aashi"};
const obj2 = {role: "Devolper"};

const result = {...obj1, ...obj2 };
console.log(result);

// rest operator

function number(...num) {
    console.log(num);
    
    const sum = num.reduce((acc, curr)=> acc + curr, 0);
    console.log(sum);
    
}

  number(1, 2, 3, 4);

  












