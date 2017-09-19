// Create partition (ListNode, value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later. Otherwise, original order not need to be perectly preserved. Return the new head ListNode.

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.partition = function(val){
    if(this.head = null){
        return null;
    }
    var runner = this.head;
    var left = null;
    var right = null;

    while(runner != null){
        if(runner.val < val){
            if(left == null){
                left = new listNode(runner.val);
            }
            else{
                left.next = new listNode(runner.val);
            }
        }
        else{
            if(right == null){
                right = new listNode(runner.val);
            }
            else{
                right.next = new listNode(runner.val);
            }
        }
        runner = runner.next;
    }
    var partitioned = concatenate(left, right);
    return partitioned;
}

sLinkedList.prototype.concatenate = function(head, tail){
    if(head == null && tail == null){
        return null;
    }
    if(head == null){
        return tail;
    }
    if(tail == null){
        return head;
    }
    var runner = head;
    while(runner != null){
        runner = runner.next;
    }
    runner.next = tail;
    return head;
}

