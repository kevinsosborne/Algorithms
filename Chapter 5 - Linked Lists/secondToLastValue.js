// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.secondToLastValue = function(){
    if(this.head == null || this.head.next == null){
        return this;
    }
    var runner = this.head;
    while(runner.next.next){
        runner = runner.next;
    }
    return runner.val;
}

var list = new sLinkedList();
var node1 = new listNode(10);
var node2 = new listNode(4);
var node3 = new listNode(11);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(list.secondToLastValue());
