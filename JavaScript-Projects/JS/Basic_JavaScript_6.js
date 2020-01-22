function rideFunction(){
    var height, canRide;
    height = document.getElementById("height").value;
    (canRide < 52) ? "You're too short":"You're tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride.";
}
function voteFunction(){
    let age, canVote;
    age = document.getElementById("age").value;
    (canVote < 18) ? "You're too young" : "You're old enough to vote";
    document.getElementById("vote").innerHTML = canVote + " to vote";
}
function vehicle(Make, Model, Year, Color){
    this.vehicleMake = Make;
    this.vehicleModel = Model;
    this.vehicleYear = Year;
    this.vehicleColor = Color; 
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Green");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("keywords&Constructors").innerHTML =  "Erik drives a " + Erik.vehicleColor + " colored " + Erik.vehicleModel + " manufactured in "+ Erik.vehicleYear + ".";
}
function data(Name, Age, Gender, EyeColor){
    this.dataName = Name;
    this.dataAge = Age;
    this.dataGender = Gender;
    this.dataEyeColor =  EyeColor;
}
function countFunc(){
    document.getElementById("Counting").innerHTML = count();
    function count(){
        let num1 = 9;
        function plus1(){
            num1 += 1;
        }
        plus1();
        return num1;
    }
}