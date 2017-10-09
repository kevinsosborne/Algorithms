// Return whether the stack is empty. Now that you're warmed up, create a list-based clas SLStack, with a singly linked list.


function ArrStack(){
    this.values = [];
}

ArrStack.prototype.isEmpty = function(){
    if(this.values.length === 0){
        return true;
    }
    else{
        return false;
    }
}

var arr = new ArrStack();
console.log(arr.isEmpty());
