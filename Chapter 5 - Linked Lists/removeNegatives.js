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
    var previous = this.head;
    var current = this.head.next;
    if(!this.head){
        return this;
    }
    else{
        if(this.head.val < 0){
            this.head = this.head.next;
        }
        while(current){
            if(current.val < 0){
                console.log(current.val);
                if(current.next){
                    console.log('test');
                    console.log(previous.next.val);
                    console.log(current.next.val);
                    console.log(current.next.next.val);
                    previous.next = current.next;
                    current = current.next.next;
                    }
                else{
                    previous.next = null;
                    return this;
                    }
                }
            else{
                previous = previous.next;
                current = current.next;
                }
            }
        }
        console.log(this);
        return this;
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