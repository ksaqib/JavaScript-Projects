let x = parseInt(prompt("Enter a number: "));
let y = parseInt(prompt("Enter another number: "));
if ((x - y) > 0){
    document.write("</br>", "X is greater than Y, i.e. 'Boolean Value = True'");
}
else if ((x - y) < 0){
    document.write("</br>", "Y is greater than X, i.e. 'Boolean value = false'");
}
else {
    document.write("</br>", "X is equal to Y, i.e. 'Boolean value = false'");
}

let sum = x + y;
console.log(`The sum of x + y equals ${sum}.`);
let summation = ("12" + 5);
document.write("</br>", `The summation of string \"12\" and the integar value of 5 equals: ${summation}.`);

let a = "String";
let b = 5;
let c = " ";
let d = 5;
let e = "5";
let f = 01/01/2020;
let g = 01/01/2021;

if( b === d){
    document.write("</br>","True");
}else {
    document.write("</br>","False");
}

if( a === d){
    document.write("</br>","True");
}else {
    document.write("</br>","False");
}

if( e === d){
    document.write("</br>","True");
}else {
    document.write("</br>","False");
}

if(g === f){
    document.write("</br>","True");
}else {
    document.write("</br>","False");
}
if((b == d) && typeof (b) == "number" && typeof (d) == "number"){
    document.write("</br>", "Its all true");
} 
if((b != e) && typeof (b) == "number" || typeof (e) == "string"){
    document.write("</br>", "Its all true as well");
}
function notFunction1(){
    document.getElementById("Not1").innerHTML =  !(5 > 10);
}
function notFunction2(){
    document.getElementById("Not2").innerHTML =  !(20 > 10);
}