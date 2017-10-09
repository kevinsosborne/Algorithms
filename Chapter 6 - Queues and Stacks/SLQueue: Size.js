// Create SLQueue method size() that returns the number of values in our queue. 

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

SLQueue.prototype.Size = function(){
    if(!this.head){
        console.log("This list is empty");
        return this;
    }
    else{
        var runner = this.head;
        var count = 0;
        while(runner){
            count++;
            runner = runner.next;
        }
        console.log(`Total size of queue is ${count}`);
        return count;
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

var list2 = new SLQueue();

list.head = node1;
node1.next = node2;
node2.next = node3;

list.Display();
list.Size();

