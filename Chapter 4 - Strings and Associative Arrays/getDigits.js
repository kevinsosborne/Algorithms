// Create a function that, given a string, returns integer made from the string's digits. Given "Ps;a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str){
    str.split("");
    var newints = "";
    for (var i = 0; i < str.length; i++){
        for (var x = 0; x <= 9; x++){
            if(str[i] == x){
                newints += str[i];
            }
        }
    }
    console.log(newints);
}

getDigits("Ps;a3y5w7h9a2t4?6!8?0");
