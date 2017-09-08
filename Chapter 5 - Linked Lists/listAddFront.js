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





