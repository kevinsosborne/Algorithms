// Return whether the stack is empty

function listNode(val){
    this.val = val;
    this.next = null;
}

function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.isEmpty = function(){
    if(!this.head){
        return "Empty List";
    }
    else{
        return "Have a List";
    }
}

var list = new sLinkedList();
var node1 = new listNode(1);
var node2 = new listNode(2);
var node3 = new listNode(3);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(list.isEmpty());