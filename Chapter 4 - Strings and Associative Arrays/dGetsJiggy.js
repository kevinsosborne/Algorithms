// Write a function that accepts as a paremeter a string containing someone's name. Return a string containing the following oh-so-cool greeting: strip off the very first letter of the name, capitalize this new word, and add " to the [first letter]!" Given "Dylan", return "Ylan to the D!".

function dGetsJiggy(str){
    var name = str.split("");
    var temp = " to the " + name[0] + "!";
    name[1] = name[1].toUpperCase();
    for (var x = 0; x < name.length - 1; x++){
        name[x] = name[x + 1];
    }
    name[name.length - 1] = temp;
    name = name.join("");
    console.log(name);
}

dGetsJiggy("Guang");