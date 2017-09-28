// Given a Stack, create a new second Stack and copy values from first Stack into second Stack, so they pop in the same order. Use only one Queue for additional storage, and only public Stack/Queue interfaces.

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
    

sLinkedList.prototype.copy = function(){
    var copyList = new sLinkedList();
    var runner = this.head;

    var node = new listNode(runner.val);
    copyList.head = node;
    var runner2 = copyList.head;
    console.log(runner2.val);
    runner = runner.next;

    while(runner){
        var newNode = new listNode(runner.val);
        runner2.next = newNode;
        runner2 = runner2.next;
        runner = runner.next;
    }
    return copyList;
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

var list1 = new sLinkedList();
var node1 = new listNode(0);
var node2 = new listNode(2);
var node3 = new listNode(2);

list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(list1.copy());
list1.Display();