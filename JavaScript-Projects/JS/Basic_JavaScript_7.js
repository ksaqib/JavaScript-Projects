let x = 1;
//let new = 3;
function testFunc1(){
    document.write(`The value of X if X has global scope equals ${x}.`);
}
function testFunc2(){
    let a = parseInt(prompt("Enter a number: "));
    let b = parseInt(prompt("Enter another number: "));
    document.write("</br>",`The value of a and b with local scope equals ${a} and ${b}, respectively.`, "</br>");
    document.write(typeof(a));
}

//console.log(new);
