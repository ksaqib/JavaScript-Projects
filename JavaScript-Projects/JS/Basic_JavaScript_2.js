function myFunc(){
    var str1 = "I am a string";
    var str2 = "and I  am  also a string";
    var str3 = " I guess, i wil also call myself a string";
    var str = str1 + " " + str2;
    str += str3;
    document.getElementById("join").innerHTML =  str;
}
