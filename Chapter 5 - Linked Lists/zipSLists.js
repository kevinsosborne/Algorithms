// Provide two pointers to independent linked lists, 'zip' the two lists together by alternating nodes. Start with the first list, and return the new combined list. 

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.zipSLists = function(secondLL){
    var first_curr = this.head;
    var second_curr = secondLL.head;
    var first_next;
    var second_next;
    // while there are available options in the p
    while(first_curr != null && second_curr != null){
        // save next pointers
        first_next = first_curr.next;
        second_next = second_curr.next;
        // make q_curr as next of p_curr
        second_curr.next = first_next;
        first_curr.next = second_curr;
        //  update current pointers to the next position
        first_curr = first_next;
        second_curr = second_next;
    }
    secondLL = second_curr;
    return this;
}

var list1 = new sLinkedList();
var node1 = new listNode(5);
var node2 = new listNode(15);
var node3 = new listNode(25);
var node4 = new listNode(35);

list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

var list2 = new sLinkedList();
var node5 = new listNode(10);
var node6 = new listNode(20);
var node7 = new listNode(30);
var node8 = new listNode(40);

list2.head = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

console.log(list1.zipSLists(list2));