// Return (not remove) the stack's top value.

function listNode(val){
    this.val = val;
    this.next = null;
}

function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.top = function(){
    var runner = this.head;
    while(runner.next){
        runner = runner.next;
    }
    return "the top value is " + runner.val;
}


var list = new sLinkedList();
var node1 = new listNode(1);
var node2 = new listNode(2);
var node3 = new listNode(5);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(list.top());

