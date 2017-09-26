// Create a method contains(val) to return whether given value is found within our queue.

// Create SLQueue method front() to return the value at the front of our queue, without removing it.

// Create SLQueue method dequeue() to remove and return value at front of queue. Remember, SLQueue uses a singly linked list (not array).

// node function
function SLNode(value){
    this.val = value;
    this.next = null;
}

// queue function
function SLQueue(){
    var head = null;
    var tail = null;
}

SLQueue.prototype.Contains = function(val){
    if(!this.head){
        console.log("This list is empty");
        return this;
    }
    else{
        var runner = this.head;
        while(runner){
            if(runner.val === val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

SLQueue.prototype.Display = function(){
    var count = 0;
    var runner = this.head;
    while(runner){
        count++;
        console.log(`Node ${count} has value ${runner.val}`);
        runner = runner.next;
    }
}

var list = new SLQueue();
var node1 = new SLNode(1);
var node2 = new SLNode(2);
var node3 = new SLNode(3);

list.head = node1;
node1.next = node2;
node2.next = node3;

list.Display();
console.log(list.Contains(5));


  