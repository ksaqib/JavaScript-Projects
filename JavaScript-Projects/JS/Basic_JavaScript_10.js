function callLoop(){
    let digit = "";
    let x = 1;
    while (x < 11){
     digit = digit + "<br>" + x;
     x++;
    }
    document.getElementById("loop").innerHTML = digit;
}
function stringLength(){
    let str1 = prompt("Enter a string to have its length calculated: ");
    document.write(`The length of the entered string is  ${str1.length} characters.`);
}
function loopFunc(){
    let str2 = prompt("Enter a string to have it reversed: ");
    document.write("The reversed string is: ", "</br>");
    for (let i = str2.length-1; i >= 0; i--){
        document.write(`${str2[i]}`)
    }
}
function constantFunction(){
    const cars = {
        type: "SUV",
        brand: "Toyota",
        color: "black"
    };
    this.color = "Khaki";
    this.price = "$89,000";
    document.getElementById("constant").innerHTML = "The " + cars.brand + " " + cars.type + " in " + this.color + " color looks great.";
}
function breakFunc(){
    document.write("The value of \'i\' is: ");
 for(let i = 0; i < 11; i++){
     document.write("</br>", i);
     if (i === 3){
         break;
     }
 }
}

//This code appears to be correct, however, the line i ==3 or i ===3 simply won't skip.
function continueFunc(){
    let i = 0;
    document.write("The value of \'i\' is: ");
    while (i < 6){
        i++;
     document.write("</br>", i);
     if (i/3 === 1){
        continue;
     }
     
    }
}