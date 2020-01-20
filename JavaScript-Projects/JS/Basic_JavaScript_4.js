function myFunc(){
    var car = {
        make: "Toyota",
        model: "Prius",
        type: "sedan",
        category: "cars",
        mpg: 17,
    };
    delete car.mpg;
    document.getElementById("Dictionary").innerHTML = car.mpg;
}
let x =  3E310;
let y = -3E310;
document.write("</br>", `The positive inifinty is displayed as ${x}.`);
document.write("</br>", `The negative inifinty is displayed as ${y}.`);

