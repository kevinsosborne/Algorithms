// String.concat(sr2, str3,...,strX) - add string(s) to end of existing one. Return new string.

function concat(){
    var newstr = "";
    for (var x = 0; x < arguments.length; x++){
        newstr += arguments[x];
    }
    return newstr;
}

console.log(concat("Hello World", "Find Something"));