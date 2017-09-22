// Create display(node) for debugging that returns a string containing all list values. Build what wish console.log(myList) did!

// node function
function node(val){
    this.val = val;
    this.next = null
}

// SLL function
function sLinkedList(){
    this.head = null;
}

// display node function
function displayNode(LL){
    var currentNode = LL.head;
    var str = "";
    var count = 1;
    while(currentNode){
        str += count + " node has a value of " + currentNode.val + "\n";
        count ++;
        currentNode = currentNode.next;
    }
    return str;
}

var list1 = new sLinkedList();
var node1 = new node(8);
var node2 = new node(120);
var node3 = new node(5);
list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(displayNode(list1));