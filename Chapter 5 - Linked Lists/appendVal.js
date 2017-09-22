// Create appendVal(list, val, after) that inserts a new ListNode containing given val immediately after the node containing after (or at end, if after not found). Return the new list.

// list node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.appendVal = function(val, target){
    var newNode = new listNode(val);
    if(this.head == null){
        this.head = newNode;
    }
    else{
        var runner = this.head;
        while(runner.next){
            if(runner.val == target){
                var temp = runner.next;
                runner.next = newNode;
                newNode.next = temp;
                return this;
            }
            runner = runner.next;
        }
        runner.next = newNode;
    }
    return this;
}