// Rudy isn't nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a point to the new head node.

function listNode(value){
    this.val = value;
    this.next = null;
    return this;
}

function sLinkedList(){
    this.head = null;
    return this;
}

function addFront(LL, val){
    var node = listNode(val)
    node.next = LL.head;
    LL.head = node;
}

//Create the list
var list1 = new sLinkedList();
var node1 = new listNode(6);
var node2 = new listNode(7);
var node3 = new listNode(8);
list1.head = node1;
node1.next = node2;
node2.next = node3;

//Add a new Node to front of list
//Print head value of list before and after the addition for verification
console.log(list1.head.val);
addFront(list1, 9);
console.log(list1.head.val);
console.log(list1.head.next.val);