// String.trim() - remove whitespace (spaces, tabs, newlines) from both sides, and return a new string. Example "\n  hello googlebye \t ". trim() should return "hello goodbye".

String.prototype.trim = function(){
    console.log(this);
    var strArr = this.split(" ");
    console.log(strArr);
    var newArr = [];
    for (var x = 0; x < strArr.length; x++){
        if(strArr[x] != ""){
            newArr.push(strArr[x]);
        }
    }
    var str = newArr.join(" ");
    console.log(str);
    return str;   
}

"    New Headlines  ".trim();