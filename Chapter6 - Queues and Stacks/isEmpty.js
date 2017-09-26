// Create SLQueue method isEmpty() that returns wheather our queue contains no values. 

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

SLQueue.prototype.isEmpty = function(){
    if(!this.head){
        console.log("This list is empty");
        return this;
    }
    else{
        console.log("This list is not empty");
        return this;
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
list.isEmpty();
list2.isEmpty();


  