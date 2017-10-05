// Create enqueue(val) that adds val to our CirQueue, or return false. Wrap if needed!


class Queue{
    constructor(cap){
        this._storage = [];
        this._start = 0;
        this._end = 0;
        this._capacity = cap;
        this._storage.length = cap;
    }
    Enqueue(val){
        if(this._end < this._storage.length){
        this._storage[this._end] = val;
        this._end++;
        }
        else{
            this._end = this._end % this._capacity;
            if(this._start > this._end){
                this._storage[this._end] = val;
            }
        }
    }
    Display(){
        return this._storage;
    }
}

var q = new Queue(2);
q.Enqueue("First thing");
q.Enqueue("Second thing");
console.log(q.Display());

