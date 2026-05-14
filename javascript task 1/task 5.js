// // student registration form

// let studentName = prompt("Enter student name:");
// let department = prompt("Enter department:");
// let age = prompt("Enter age:");


// console.log("
//     Student Registration Details    
//      Name:${studentName}    
    //  Department:${department}    
//      Age:${age}    
// ");


// atm withdrawal system

const balance = 10000

let withdrawalAmount = Number(prompt( "Enter withdrawal amount:"));

if (withdrawalAmount >= 100 && withdrawalAmount <= balance) {
    console.log("Transaction succesful");
} else if(withdrawalAmount < 100) {
    console.log("Transaction failed: Minimum withdrawal amount is 100");
    
}else{
    console.log("Transaction failed: Insufficient balance");
    
}



// swiggy discount checker

const orderAmount = Number(prompt("Enter your order amount:"));
const deliveryMessage = orderAmount > 499
? "Free delivery available"
: "Delivery charges applied";
console.log(deliveryMessage);



// instagram login system

const correctUsername = "admin";
const correctPassword = "1234";

const usernameInput = prompt("Enter username:");

if (usernameInput === correctUsername) {

    const passwordInput = prompt("Enter password:");
    if (passwordInput === correctPassword) {
        console.log("Login sucess");
    }else {
        console.log("Wrong password");
    }

}else {
    console.log("Invalid Username");
}



// traffic signal system 

let signal = prompt("Enter signal color (red / yellow / green):");
signal = signal.toLowerCase();
switch(signal) {
    case "red": 
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green": 
        console.log("GO");
        break;

    default:
        console.log("Invalid color");
 
    }



// employee salry calculator

function salaryCalculation(basic, bonus) {
    let totalSalary = basic + bonus;
    return totalSalary;
}
let result = salaryCalculation(25000, 5000);
console.log('Total salary is: ${30000}');


//  E-commerce salary cart total

const prices = [100, 200, 300, 400];
let totalPrice = 0;
for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
}
const averagePrice = totalPrice / prices.length;

console.log("Total Price:", totalPrice);
console.log("Average price:", averagePrice);

// whatsapp contact book

const student = {
    name:"Aashiq sheriff",
    phone:"+91=========",
    status:"Active"
};
for (let key in student) {
    console.log('${key}: ${student[key]}');
    
}

// movie ticket booking

function payment(movieName){
    console.log('Processing payment for your ticket to: (LIK)');
    console.log("Payment successful! Enjoy your movie.");
}

function bookTicket(movie,callback){
    console.log('booking initiated for: (LIK)...');
    console.log("seat confirmed! Booking complete.");
    
    callback(movie);
}
bookTicket("inception", payment);


// FOOD DELIVERY TIME TRACKER

function* trackOrder(){
    yield "Order confirmed";
    yield "Preparing food";
    yield "out for delivery";
    yield "Delivered";
}

const orderStatus = trackOrder();

console.log(orderStatus.next().value);
console.log(orderStatus.next().value);
console.log(orderStatus.next().value);
console.log(orderStatus.next().value);






