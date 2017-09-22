// Create a standalone function that locates the maximum value in a linked list, and moves that node to the back of the list. Return the new list, with all nodes still present, and all in their original order except for the node you moved to the end of the singly linked list.

// node function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

// move max to back function
function moveMaxToBack(LL){
    var currentnode = LL.head;
    var maxVal = LL.head.val;
    var maxNode = LL.head;
    var previous;
    var lastNode;
    while(currentnode.next){
        if(currentnode.next.val > maxVal){
            maxVal = currentnode.next.val;
            maxNode = currentnode.next;
            previous = currentnode;
        }
        currentnode = currentnode.next;
        lastNode = currentnode;
    }
    if(maxNode == lastNode){
        return LL;
    }
    else if(!previous){
        LL.head = maxNode.next;
        maxNode.next = lastNode;
        lastNode.next = maxNode;
    }
    else{
        previous.next = maxNode.next;
        maxNode.next = lastNode;
        lastNode.next = maxNode;
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

console.log(moveMaxToBack(list));
