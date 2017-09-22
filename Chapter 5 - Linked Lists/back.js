// Create a function that accepts a ListNode pointer and returns the last value in the list.

// node function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
    this.lastVal = function(){
        var currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }
}


var list = new sLinkedList();
var node1 = new node(30);
var node2 = new node(25);
var node3 = new node(2);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(list.lastVal());