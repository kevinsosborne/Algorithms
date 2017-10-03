// Return (not remove) the stack's top value.

function ArrStack(){
    this.values = [1,2,3,4];
}

ArrStack.prototype.top = function(){
    var topVal = this.values[this.values.length -1];
    console.log(`Top Value is ${topVal}`);
    return topVal;
}

var arr = new ArrStack();
arr.top();
