// Create pop() to remove and return the top val

function listNode(val){
    this.val = val;
    this.next = null;
}

function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.pop = function(){
    if(!this.head){
        return "List is empty";
    }
    else if(!this.head.next){
        this.head = null;
    }
    else{
        var prev = this.head;
        var curr = this.head.next;
        while(curr){
            if(!curr.next){
                prev.next = curr.next;
            }
            prev = curr;
            curr = curr.next;
        }
    }
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

list.pop()
list.pop()
list.pop()
list.Display();