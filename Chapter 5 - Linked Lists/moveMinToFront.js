// Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. Return the new list, with all nodes still present, and all (except for the new head node) in their original order.

// Create min(node) to return list's smallest val.

// node function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

// move min to front function
function moveMinToFront(LL){
    var currentnode = LL.head;
    var minVal = LL.head.val;
    var minNode = LL.head;
    var previous;
    while(currentnode.next){
        if(currentnode.next.val < minVal){
            minVal = currentnode.next.val;
            minNode = currentnode.next;
            previous = currentnode;
        }
        currentnode = currentnode.next;
    }
    console.log(minNode.val);
    if(minNode == LL.head){
        return LL;
    }
    else{
        previous.next = minNode.next;
        minNode.next = LL.head;
        LL.head = minNode;
    }
    return LL;
}

var list = new sLinkedList();
var node1 = new node(30);
var node2 = new node(25);
var node3 = new node(2);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(moveMinToFront(list));
console.log(list.head.next.next.val);