// Create push(val) that adds val to our stack.

function listNode(val){
    this.val = val;
    this.next = null;
}

function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.push = function(val){
    var runner = this.head;
    while(runner.next){
        runner = runner.next;
    }
    var newNode = new listNode(val);
    runner.next = newNode;
}

sLinkedList.prototype.Display = function(){
    var count = 0;
    var runner = this.head;
    while(runner){
        count++;
        console.log(`Node ${count} has value ${runner.val}`);
        runner = runner.next;
    }
}

var list = new sLinkedList();
var node1 = new listNode(1);
var node2 = new listNode(2);
var node3 = new listNode(3);

list.head = node1;
node1.next = node2;
node2.next = node3;

list.push(15);
list.Display();
