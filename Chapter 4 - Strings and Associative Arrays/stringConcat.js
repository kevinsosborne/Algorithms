// String.concat(sr2, str3,...,strX) - add string(s) to end of existing one. Return new string.


String.prototype.concat = function(){
    var newStr = this;
    for (var x = 0; x < arguments.length; x++){
        newStr += arguments[x];
    }
    console.log(newStr);
}

"Hello, ".concat("Kevin ", "have a nice day");