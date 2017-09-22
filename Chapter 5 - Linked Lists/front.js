// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no - only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is empty, return null.

// Node Function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL Function
function sLinkedList(){
    this.head = null;
}

function front(LL){
    return LL.head.val;
}

var list1 = new sLinkedList();
var node1 = new node(1);
var node2 = new node(2);
var node3 = new node(3);
list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(front(list1));