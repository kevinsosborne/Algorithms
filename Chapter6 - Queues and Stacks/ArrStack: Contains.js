// Retyrb whether given val is within the stack.


function ArrStack(){
    this.values = [1,2,3,4];
}

ArrStack.prototype.contains = function(val){
    for(var i = 0; i < this.values.length; i++){
        if(this.values[i] === val){
            return true;
        }
    }
    return false;
}

var arr = new ArrStack();
console.log(arr.contains(3));
