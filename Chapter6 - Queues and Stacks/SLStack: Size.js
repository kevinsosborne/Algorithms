// Return the number of stacked values.

function listNode(val){
    this.val = val;
    this.next = null;
}

function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.size = function(){
    var count = 0;
    var runner = this.head;
    while(runner){
        count++;
        runner = runner.next;
    }
    return "The list size is " + count;
}

var list = new sLinkedList();
var node1 = new listNode(1);
var node2 = new listNode(2);
var node3 = new listNode(3);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(list.size());