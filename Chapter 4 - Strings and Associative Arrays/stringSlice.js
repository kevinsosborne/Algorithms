// String.slice(start, end) - extract part of a string and return in a new one. Start and end are indicies into the string, with the first character at index 0. End param is optional and if present, refereces one beyond the last character to include.

function slice(str, start, end){
    var newStr = "";
    var x = start;
    if(start > str.length){
        return "Start value must be less than number of characters of the string"
    }
    while (x <= end){
        newStr += str[x];
        x++;
    }
    console.log(newStr);
}

slice("Hello", 2,4);