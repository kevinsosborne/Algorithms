// Given a pointer to head node of a singly linked list, remove any nodes containing negative values and return the new list.

// node funciton
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

// removeNegatives
sLinkedList.prototype.removeNegatives = function(){
    var previous = null;
    var temp = null;
    var current = this.head;
    if(!this.head){
        return this;
    }
    else{
        while(current != null){
            if(current.val < 0){
                if(previous != null){
                    previous.next = current.next;
                }
                else{
                    this.head = current.next;
                }
                temp = current;
                current = current.next;
            }
            else{
                previous = current;
                current = current.next;
            }
        }
    }
    console.log(this);   
}
 



var list = new sLinkedList();
var node1 = new listNode(-55);
var node2 = new listNode(-6);
var node3 = new listNode(7);
var node4 = new listNode(666);

list.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

list.removeNegatives();