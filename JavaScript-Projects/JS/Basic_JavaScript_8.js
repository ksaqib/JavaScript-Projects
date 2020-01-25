function fullSentence(){
    var partI = " I have ";
    var partII = "made this ";
    var partIII = "into a complete ";
    var partIV =  "sentence.";
    var fullSentence =  partI.concat(partII, partIII, partIV);
    document.getElementById("concatenate").innerHTML = fullSentence;
}
function sliceMethod(){
    var sentence = "All work and no play makes Johnny a dull boy";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}
function toUpperCase(){
    var phrase = "This is a demonstration of the toUpperCase Method.";
    phrase =  phrase.toUpperCase();
    document.getElementById("toUpperCase").innerHTML = phrase;
}
function search(){
    var phrase = "This is a search method demonstration";
    phrase = phrase.search("search");
    document.getElementById("search").innerHTML =  phrase;
}
function stringMethod(){
    var num1= 182;
    document.getElementById("toString").innerHTML = num1.toString();
}
function precisionMethod(){
    var num2= 3.15642789;
    document.getElementById("precision").innerHTML = num2.toPrecision(5);
}
function fixedMethod(){
    var num3 =  3.154567;
    document.getElementById("toFixed").innerHTML = num3.toFixed(2);
}
function valueMethod(){
    var num4 =  2.761548;
    document.getElementById("toValue").innerHTML = num4.valueOf();
}