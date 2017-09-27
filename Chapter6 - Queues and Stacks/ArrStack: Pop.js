// Create pop() to remove and return the top value.

function ArrStack(){
    this.values = [1,2,3,4,6];
}

ArrStack.prototype.pop = function(){
    var topVal = this.values[this.values.length -1];
    this.values.length = this.values.length -1;
    return {"Top Value": topVal, "Modified Arr": this.values};
}

var arr = new ArrStack;
console.log(arr.pop())