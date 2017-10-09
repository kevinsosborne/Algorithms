// Return the number of stacked values.

function ArrStack(){
    this.values = [1,2,10];
}

ArrStack.prototype.size = function(){
    var count = 0;
    for(var i = 0; i < this.values.length; i++){
        count++;
    }
    return count;
}

var arr = new ArrStack();
console.log(arr.size());