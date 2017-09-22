// Ha! Rudy is getting what he deserves - kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If list is empty, return null.

// Node Function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL Function
function sLinkedList(){
    this.head = null;
}

// Remove Front Function
function removeFront(LL){
    if(LL.head.next == null){
        return null;
    }
    LL.head = LL.head.next;
    return LL.head.val;
}

var list1 = new sLinkedList();
var node1 = new node(1);
var node2 = new node(2);
var node3 = new node(3);
list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(removeFront(list1));
console.log(removeFront(list1));
console.log(removeFront(list1));