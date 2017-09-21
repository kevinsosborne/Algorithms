// Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

// Node Function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

// Copy function
function copy(LL){
    if(LL.head){
        var newList = new sLinkedList();
        var runner = LL.head;
        var previousNode = new listNode(LL.head.val);
        newList.head =  previousNode;
    }
    while(runner){
        var  nextNode = new listNode(runner.val);
        console.log(nextNode.val);
        previousNode.next = nextNode;
        previousNode = nextNode;
        runner = runner.next;
    }
    return newList;
}

var list1 = new sLinkedList();
var node1 = new listNode(5);
var node2 = new listNode(10);
var node3 = new listNode(223);

list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(copy(list1));
