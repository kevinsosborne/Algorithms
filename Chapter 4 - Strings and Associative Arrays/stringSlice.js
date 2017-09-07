// String.slice(start, end) - extract part of a string and return in a new one. Start and end are indicies into the string, with the first character at index 0. End param is optional and if present, refereces one beyond the last character to include.

String.prototype.slice = function(start, end){
    console.log(this);
    var newStr = "";
    var x = start;
    while (x <= end){
        newStr += this[x];
        x++;
    }
    console.log(newStr);
}

"Hello".slice(2,4);