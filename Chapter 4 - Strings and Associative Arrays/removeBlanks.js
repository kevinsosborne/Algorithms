// Create a function that, given a string, returns all of that string's contents, but without blanks. If given the string "Pl ayTha tF u nkyM usi c ", return PlayThatFunkyMusic".

function removeBlanks(str){
    var wordArray = str.split(" ");
    wordArray = wordArray.join("");
    return wordArray;
}

console.log(removeBlanks("Pl ayTha tF u nkyM usi c ").length);