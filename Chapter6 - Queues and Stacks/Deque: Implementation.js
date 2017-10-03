// Having combined the designs of Stack and Queue, why not combine features as well. Let's create a class Deque (pronounced 'deck') representing a double-ended queue. On top of the basic six methods, ernable it to push and pop from opposite ends. Specifically, build class Deque with pushFront(val), pushBack(val), popFront(), front(), back(), contains(val), isEmpty(), and size().

class listNode{
    constructor(val){
    this.val = val;
    this.next = null;
    }
}


class Deque{
    constructor(){
    this.head = null;
    }
    pushFront(val){
        var newNode = new listNode(val);
        if(!this.head){
            this.head = newNode;
        }
        else{
            var runner = this.head;
            this.head = newNode;
            newNode.next = runner;
        }
        return this;
    }
    pushBack(val){
        var newNode = new listNode(val);
        if(!this.head){
            this.head = newNode;
        }
        else{
            var runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this;
        
    }
    popFront(){
        if(!this.head){
            return "List is empty";
        }
        else{
            var temp = this.head.next;
            this.head = null;
            this.head = temp;
        }
        return this;
    }
    popBack(){
        if(!this.head){
            return "List is empty";
        }
        else{
            var runner = this.head;            
            var previous = runner;
            while(runner.next){
                previous = runner;                
                runner = runner.next;
            }
            previous.next = null;
            return this;
        }
    }
    front(){
        if(!this.head){
            return "List is empty";
        }
        else{
            return this.head.val;
        }
    }
    back(){
        if(!this.head){
            return "List is empty";
        }
        else{
            var runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            return runner.val;
        }
    }
    contains(val){
        if(!this.head){
            return "List is empty";
        }
        else{
            var runner = this.head;
            if(runner.next){
                if(runner.val === val){
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }
}

var deque = new Deque();
console.log(deque.pushFront(1));
console.log(deque.pushFront(2));
console.log(deque.pushFront(3));
console.log(deque.popBack());
console.log(deque.front());
console.log(deque.back());
console.log(deque.contains(3))
console.log(deque.contains(1))

// var deque1 = new Deque();
// console.log(deque1.pushBack(1))
// console.log(deque1.pushBack(3))
// console.log(deque1.pushBack(2))