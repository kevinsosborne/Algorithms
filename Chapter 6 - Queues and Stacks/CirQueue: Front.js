// Return (not remove) the queue's front value.
// First In First Out


function CirQueue(cap){
    this.head = 0;
    this.tail = 0;
    this.capacity = cap;
    this.arr = [];
    this.front = function(){
        if(!this.arr[this.head]){
            return "Empty Array";
        }
        else{
        arr[head];
        }
    }
}

var q = new CirQueue(10);
console.log(q.front());