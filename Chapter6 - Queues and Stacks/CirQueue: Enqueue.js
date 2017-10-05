// Create enqueue(val) that adds val to our CirQueue, or return false. Wrap if needed!


class Queue{
    constructor(cap){
        this._storage = [];
        this._start = 0;
        this._end = -1;
        this._capacity = cap;
    }
    isFull(){
        console.log(this._capacity);
        console.log(this._end);
        console.log(this._start);
        if(this._start == ((this._end+1) % this._capacity)){
            return true;
        }
        else{
            return false;
        }
    }

    Enqueue(val){
        this._storage[++this._end] = val;
    }
    Display(){
        return this._storage;
    }
}

var q = new Queue(0);
// q.Enqueue("First thing");
// q.Enqueue("Second thing");
console.log(q.Display());
console.log(q.isFull());

