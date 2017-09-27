// Create push(val) that adds val to our stack;

function ArrStack(){
    this.values = [];
}

ArrStack.prototype.push = function(value){
    var len = this.values.length;
    this.values[len] = value;
    return this;
}

var arr = new ArrStack();
console.log(arr.push(10).push(15).push(100));