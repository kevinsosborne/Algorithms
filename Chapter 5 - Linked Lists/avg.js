// Create average(node) to return average val.

// node function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

// avg function
function avg(LL){
    var currentnode = LL.head;
    var sum = 0;
    var count = 0;
    while(currentnode){
        sum += currentnode.val;
        count ++;
        currentnode = currentnode.next;
    }
    var avg = sum / count;
    return avg;
}

var list = new sLinkedList();
var node1 = new node(30);
var node2 = new node(25);
var node3 = new node(2);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(avg(list));