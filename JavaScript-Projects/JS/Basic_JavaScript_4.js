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