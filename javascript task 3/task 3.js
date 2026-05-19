// 1. Print numbers//

for(let a = 1 ; a <= 20 ; a++){
    console.log(a);
    
}

// 2. odd numbers

 for (let b=1; b<=50; b+=2){
    console.log(b);
    
 }

//  multiplication table

for (let c=1 ; c <= 10; c++){
    console.log("7 * " + c + "="+(7*c)); 
    
}

// reverse counting 

let d =20;
while( d >= 1){
    console.log(d);
    d--;
}

// sum of numbers

let sum = 0;
for (let e = 1; e <= 100; e++){
    sum += e;
}

console.log("total sum:",sum);


// array loop

let fruits = ["apple","banana", "orange","grapes"];
for(let f=0; f< fruits.length; f++){
    console.log(fruits[f]);
}

// count even numbers

let count = 0;
for (let g = 1; g <= 50; g++) {
    if (g % 2 === 0) {
        count++;
    }
}

console.log("even numbers count:",count);


// star pattern

for (let h = 1; h <= 5; h++) {
    let pattern="";

    for (let i=1; i<= h; i++) {
        pattern += "*";        
    }
    console.log(pattern);
}

// simple function

function welcome (){
    console.log("welcome to javascript");
}
welcome();

// function with parameter

function greet(name){
    console.log("Hi-Lo" + name);
    
}
greet(" Aashiq");


// add two numbers

function add(num1,num2){
    return num1+num2;
}
const result=add(100,200);
console.log(result);
// used differnt numbers


//salary bonus

function addBonus(salary, bonus){
    return salary  + bonus;
}
const currentSalary=50000;
const annualBonus=5000;

const totalPay = addBonus(currentSalary,annualBonus);
console.log(totalPay);

// object loop

let student = {
    name:"Aashiq",
    course:"JavaScript",
    marks:"100"
};
for(let key in student){
    console.log(key + ":" + student[key]);
}

// finding largest number

function largest(a,b){
    if (a>b){
        return a;
    }else{
        return b;
    }
}
console.log(largest(100,500));

// mini employee task

let employee = {
    name:"Aashiq",
    departmwnt: "Associate software engineer",
    salary:50000
};
 function printemployeedetails(emp,bonusAmount){
    let totalSalary = emp.Salary + bonusAmount;

    console.log("Employee Name:" + emp.name);
    console.log("Department:" + emp.Department);
    console.log("Salary: " + emp.salary);
    console.log("Salary after Bonus:"+ totalSalary);
 }
    printemployeedetails(employee, 5000);

    
    
 
