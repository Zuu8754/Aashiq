// TASK 1:

console.log(typeof("10"+5));
// answer:15 datatype:string

console.log(typeof(10 + true));
// answer:11 datatype:number

console.log(typeof(false+null));
// answer:0 datatype:number

console.log(typeof("Hello" + undefined))
// answer:Helloundefined datatype:string

console.log(typeof([1,2] + 5))
// answer:1,25 datatype: string

// TASK 2:

let result="Score:" + 100;
// console.log(result);
// answer:score100

console.log(true + 10);
console.log(false + 10);
// answer:11,10

let colors=["pink", "violet"];
let message = "my favorites " + colors;
console.log(message);
// answer:my favourites PublicKeyCredential,violet

let a= null + 1000;
console.log(a);
// answer:1000

// TASK 3:

let b= (+"500");
console.log(b)
// answer:500

console.log(+"true");
// answer:NaN

console.log(+"xyz");
// answer:NaN

console.log(Number([100]));
// answer:100

console.log(Boolean(""));
// answer:false

console.log(Boolean("javascript"));
// answer:true

console.log(Boolean(0));
// answer:false

console.log(Boolean(1));
// answer:true

console.log(Boolean(null));
// answer:false

console.log(Boolean(undefined));
// answer:false

console.log(Boolean([]));
// answer:true

console.log(Boolean({}));
// answer:true

// TASK 5:

let mark= 45;
if (mark >= 35 ){
    console.log("pass");
}else{
    console.log("fail");
}
// answer:pass

// TRIED ON MY OWN

let marks=90;
if (marks<=5){
    console.log("passed");
}else{
    console.log("failed"); 
}
// answer:failed

// TASK 6

let age=20;
if(age>=20){
    console.log();
    ("Eligible");
}else{
    console.log("Not Eligible");
}
//  answer:Eligible

// TASK 7

let c=50;
let d=80;
let e=30;

if(c>d && c>e){
    console.log("c is the greater number");
}else if("d>c && d >e"){
    console.log("d is the greater");
}else{
    console.log("c is the greater");
}


// TASK 8

let Signal="red";

switch(Signal){
    case "red":
    console.log("Hold on");
    break;
    case "yellow":
    console.log("get set");
    break;
    case "green":
    console.log("go");
    default:("invalid signal color");
}
// ANSWER: Hold on

// TASK 9

// let username = prompt("enter your name")
// let password = prompt("enter your password")
 
// if(username="aashiq"){
    // if(password="1234") {
        // alert("login sucess");
// }else{
    // alert("invalid login");
// }
// }else{
    // alert("invalid login");    
// }

// TASK 10

// let hour= prompt("enter time")

// if(hour>=1 && hour<=12){
    // alert("mornin");

// }else if(hour>=13 && hour<=15){
    // alert("afternoon");

// }else if (hour>=16 && hour<=19){
    // alert("evening");

// }else if(hour>=20 && hour<=24){
    // alert("night");
    
// }else{
    // alert("check for the time, give ");
// }

// additional question
// 1. 2
// 2. 3
// 3.52
// 4.1
// 5.NaN
// 6.true
// 7.1







