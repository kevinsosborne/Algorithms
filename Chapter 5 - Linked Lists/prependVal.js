// Create prependVal(ListNode, val, before) to insert a new ListNode with val immediately before the node containing before (or at end, if no node contains before), return the new list.

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head;
}

sLinkedList.prototype.prependVal = function(val, target){
    var newNode = new listNode(val);
    if(!this.head){
        this.head = newNode;
    }
    else{
       if(this.head.val == target.val){
        newNode.next = target;
        this.head = newNode;
        }
    }
}