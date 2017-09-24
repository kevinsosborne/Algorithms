// Given a headnode, a lowVal and a highVal, remove the list any nodes that have values less than lowVal or higher than highVal. Return the new list.

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.filter = function(lowVal, highVal){
    if(!this.head){
        return;
    }
    else{
        console.log("TEST");
        var runner = this.head;
        var previous = null;
        var temp = null;
        while(runner){
            console.log(runner.val);
            if(runner.val < lowVal || runner.val > highVal){
               if(previous != null){
                    previous.next = runner.next;
               }
               else{
                   this.head = runner.next;
               }
               runner = runner.next;
            }
            else{
                previous = runner;
                runner = runner.next;
            }
        }
        console.log(this);
    }
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

console.log(list.filter(-10,10));