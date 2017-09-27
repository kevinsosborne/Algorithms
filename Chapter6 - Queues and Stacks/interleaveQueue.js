// Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed. 

// Create a standalone function to remove an SLQueue's lowest value, otherwise leaving values in the same sequence. Use only local variables; allocate no other objects. Remove all duplicates of this value.


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

SLQueue.prototype.interleaveQueue = function(){
    var runner1 = this.head;
    var runner2 = this.head.next;
    var runner3 = this.head.next.next;
    var runner4 = this.head.next.next.next;
    var temp;
    while(runner4){
        runner1.next = runner4;
        temp = runner4.next;
        runner4.next = runner2;
        runner3.next = temp;
   
        
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

var list1 = new SLQueue();
var node1 = new SLNode(1);
var node2 = new SLNode(2);
var node3 = new SLNode(3);
var node4 = new SLNode(4);
var node5 = new SLNode(5);

list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// list1.Display();
list1.interleaveQueue();
list1.Display();
