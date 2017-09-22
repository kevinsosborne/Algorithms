// Create a function that creates a ListNode with given value and inserts it at the end of the list.

// node function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
    this.addBack = function(val){
        var newNode = new node(val);
        var currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        console.log(currentNode.next.val);
    }
}


var list = new sLinkedList();
var node1 = new node(30);
var node2 = new node(25);
var node3 = new node(2);

list.head = node1;
node1.next = node2;
node2.next = node3;

list.addBack(5);