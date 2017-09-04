// Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the build-in reverse()!

function reverseString(str){
    var array = str.split("");
    var temp;
    for (var x = 0; x < Math.floor(array.length/2); x++){
        temp = array[x];
        array[x] = array[array.length - 1 - x];
        array[array.length - 1 - x] = temp;   
    }
    array = array.join("");
    console.log(array);
    return array;
}

reverseString("creature");