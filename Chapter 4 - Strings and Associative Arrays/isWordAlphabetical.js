// Nikki, a queen of gentle sarcasm, loves the word facetiously. Lance helpfully points out that it is the only known English word that contains all five vowels in alphabetical order, and it even has a 'y' on the end! Nikki takes a break from debugging to turn and give him an acid stare -- indeed a look that was delivered arseniously. Given a string, return whether all contained letters are in alphabetically order. 

function wordAlphabetically(str){
    var letters = {"a": 1, "b": 2, "c": 3, "d": 4, "e":5, "f":6, "g":7, "h":8, "i":9, "j":10, "k":11, "l":12, "m":13, "n":14, "o":15, "p":16, "q":17, "r":18, "s":19, "t":20, "u":21, "v":22, "w":23, "x":24, "y":25, "z":26};
    var vowels = {"a": 1,"e":2, "i":3, "o":4,"u":5, "y":6};
    var strVowels = [];
    str = str.toLowerCase();
    for (var x = 0; x < str.length; x++){
        for ( i in vowels){
            if(str[x] == i){
                strVowels.push(str[x]);
                console.log(strVowels);
            }
        }
    }
    for( var idx = 1; idx < strVowels.length; idx++){
        if(vowels[strVowels[idx]] < vowels[strVowels[idx - 1]]){
            return false;
        }
    }
    return true;

}

console.log(wordAlphabetically("Elephant"));