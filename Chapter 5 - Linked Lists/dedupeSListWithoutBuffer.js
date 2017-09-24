// Can you accomplish deduplication without using a secondary buffer? What are the performance ramifications? How long would you expect the function to take to finish, if it was send an SList of length 5 million?

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.deDuplicate = function(){
    var previous = this.head;
    var current = this.head.next;
    var hash = {};
    hash[previous.val] = true;
    while(current != null){
        if(!hash[current.val]){
            hash[current.val] = true;
        }
        else{
            previous.next = current.next;
        }
        previous = current;
        current = current.next;
    }
    return this;
}

var list1 = new sLinkedList();
var node1 = new listNode(5);
var node2 = new listNode(5);
var node3 = new listNode(3);
var node4 = new listNode(35);

list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(list1.deDuplicate());