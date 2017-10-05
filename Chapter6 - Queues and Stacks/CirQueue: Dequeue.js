// Create CirQueue method dequeue() that removes / returns front value, or null on fail.


class Queue{
    constructor(cap){
        this._storage = [];
        this._start = 0;
        this._end = 0;
        this._capacity = cap;
        this._storage.length = cap;
    }
    Enqueue(val){
        if(this._end < this._storage.length && this._storage[this._end] == null){
        this._storage[this._end] = val;
        this._end++;
        console.log(this._end);
        return;
        }
        else{
            this._end = this._end % this._capacity;
            if(this._storage[this._end] == null){
                this._storage[this._end] = val;
                // this._start++;
                this._end++;
                return;
            }
            else{
                console.log("Queue Is Full")
                return;
            }
        }
    }
    Dequeue(){
        if(this._start < this._storage.length){
            var temp = this._storage[this._start];
            this._storage[this._start] = null;
            this._start++;
            return [temp, this._start];
        }
        else{
            this._start = this._start % this._capacity;
            if(this._start < this._end){
                var temp = this._storage[this._start];
                this._storage[this._start] = null;
                this._start++;
                return [temp, this._start];
            }
        }
    }
    isEmpty(){
        for(var i = 0; i < this._storage.length; i++){            
            if(this._storage[i] !== ""){
                return "Has Elements";
            }
            else{
                return "Is Empty";
            }
        }
    }
    Display(){
        return this._storage;
    }
}

var q = new Queue(3);
q.Enqueue("First thing");
q.Enqueue("Second thing");
console.log(q.Display());
// console.log(q.isEmpty());
q.Dequeue();
console.log(q.Display());
q.Enqueue("Third thing");
console.log(q.Display());
q.Enqueue("Fourth thing");
// q.Enqueue("Fourth thing");
console.log(q.Display());
q.Enqueue("Fifth thing");
// q.Enqueue("Fourth thing");
console.log(q.Display());

q.Dequeue();
console.log(q.Display());

q.Enqueue("Sixth thing");
// q.Enqueue("Fourth thing");
console.log(q.Display());



