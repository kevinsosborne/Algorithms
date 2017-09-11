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

// min function
function min(LL){
    var currentnode = LL.head;
    var min = LL.head.val;
    while(currentnode){
        if(currentnode.val < min){
            min = currentnode.val;
        }
        currentnode = currentnode.next;
    }
    return min;
}

var list = new sLinkedList();
var node1 = new node(30);
var node2 = new node(25);
var node3 = new node(2);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(min(list));