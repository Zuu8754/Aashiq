

// // ==========================================
// // 1. Student Attendance System
// // ==========================================

// const presentStudents = ["mothish","akash","aashiq"];
// const absentStudents =["sultan","surendar"];
// let attendenceList = [...presentStudents, ...absentStudents];
// attendenceList.push("arun");
// console.log(attendenceList);


// // ==========================================
// // 2. E-Commerce Cart
// // ==========================================

// const mobile = { brand: "Samsung", price: 25000};
// const charger = { type: "Fast Charger", warranty: "1 Year"};
// const productDetails = {...mobile, ...charger, deliveryDate: "20-May-2026"};
// console.log(productDetails);


// // ==========================================
// // 3. Food Delivery App
// // ==========================================

// function orderFood(...items) { console.log("Total items ordered:", items.length); console.log("First item:", items[0]); console.log("Last item:", items[items.length - 1]); }
// orderFood("Pizza", "Burger", "Fried Rice", "Ice Cream");


// // ==========================================
// // 4. Employee Salary Filter
// ==========================================

// const employees = [
//     { name: "Ravi", salary: 45000 },
//     { name: "Anu", salary: 60000 },
//     { name: "Kiran", salary: 75000 },
//     { name: "Priya", salary: 40000 }
// ];
// const highSalaryEmployees = employees.filter(function(emp) {
//     return emp.salary > 50000;
// });
// console.log(highSalaryEmployees);


// ==========================================
// 5. Online Game Score Board
// ==========================================

// const scores = [100, 200, 150, 250, 300];
// const totalScore = scores.reduce((total, score) => {
//     return total + score;
// }, 0);
// console.log("Total Score:", totalScore);