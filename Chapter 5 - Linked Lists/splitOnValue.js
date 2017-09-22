// Create splitOnVal(list, num) that, given number, splits a list in two. The latter half of the list should be returned, starting with node containing num. E.g.: splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3), and the return value will be (5=>2=>4).

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
    this.display = function(){
        var string = "Node values are ";
        var runner = this.head;
        while(runner){
            string += runner.val + ", ";
            runner = runner.next;
        }
        console.log(string);
        return this;
    }
}

sLinkedList.prototype.splitOnVal = function(num){
    if(this.head.val == num){
        return this;
    }
    var runner = this.head.next;
    var previous = this.head;
    while(runner){
        if(runner.val === num){
            var list2 = new sLinkedList();
            list2.head = runner;
            console.log(list2);
            previous.next = null;
            return this;
        }
        previous = previous.next;
        runner = runner.next;
    }
}

var list = new sLinkedList();
var node1 = new listNode(5);
var node2 = new listNode(2);
var node3 = new listNode(6);

list.head = node1;
node1.next = node2;
node2.next = node3;

list.display();
list.splitOnVal(2);
list.display();