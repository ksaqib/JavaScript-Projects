//alert("This is a Javascript Demonstrator!");
document.write("Javscript Demo.", "</br>");
//window.alert("Hello World!");
document.write("\"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.\"");
var B = "Concatenated " + " String";
document.write("</br>", B);
let Red = "I have the blues";
document.write("</br>", Red.fontcolor("Red"), "</br>", "</br>");
function myFirstFunction(){
    let str = "This text is Green.";
    let result = str.fontcolor("Blue");
    document.getElementById("Green_Text").innerHTML = result;
}