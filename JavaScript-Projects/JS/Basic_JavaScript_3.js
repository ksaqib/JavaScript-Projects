function sum(){
    let summation = 15 + 15;
    document.getElementById("add").innerHTML = "15 + 15 = " + summation;
}
function subtraction(){
    let minus = 30 - 15;
    document.getElementById("reduce").innerHTML = "30 - 15 = " + minus;
}
function multiply(){
    var product = 6*3;
    document.getElementById("product").innerHTML = "6 times 3 = " + product; 
}
function divide(){
    var divide = 6/3;
    document.getElementById("divide").innerHTML = "6 divide by 3 = " + divide; 
}
function modulus(){
    var mod = 6/5;
    document.getElementById("mod").innerHTML = "6 Mod 5 equals = " + mod;
}

let x = 22/7;
x++;
document.write(`This is an example of the increment operator: ${x}`);


let y = Math.random().toFixed(2);
document.write("</br>", "</br>", `Random number Genarator between 0 and 1 with only 2 decimal places: ${y}`);