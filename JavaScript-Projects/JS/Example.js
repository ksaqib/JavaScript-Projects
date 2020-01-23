function getDate() {
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
function Age_Function(){
    Age = document.getElementById("Greeting").value;
    if (Age >=  18){
        Vote = "You're old enough to vote!";
    }
    else{
        Vote = "You're not old enough to vote";
    }
    document.getElementById("How old are you?").innerHTML = Vote;
}
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time.";
    }
    else if (Time > 12 == Time < 18){
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("TimeOfDay").innerHTML =  Reply;
}