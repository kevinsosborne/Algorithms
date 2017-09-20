// Create ListNode method removesSelf() to disconnect (remove) itself from linked list that includes it. Note: the node night be the first in a list (it won't be the last), and you do NOT have a pointer to the previous node. Also, don't lose any subsequent nodes pointed to by .next.

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

listNode.prototype.removeSelf = function(){
    if(this.next){
        var temp = this;
        var next = this.next;
        temp = next; 
        this.next = null;
        console.log("A node removed");
        return;
    }
}

// SLL function
function sLinkedList(){
    this.head = null;
    this.display = function(){
        if(this.head == null){
            return;
        }
        else{
            var runner = this.head;            
            while(runner){
                console.log("Node val: " + runner.val);
                runner = runner.next;
            }
        }
    }
}

var list = new sLinkedList();
var node1 = new listNode(10);
var node2 = new listNode(4);
var node3 = new listNode(11);

list.head = node1;
node1.next = node2;
node2.next = node3;

list.display();
node1.removeSelf();
list.display();

