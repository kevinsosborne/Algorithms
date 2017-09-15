// Given two pointers to seperate linked lists, concatenate the second list to the end of the first one, and return the new list.

// node funciton
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

// concat function
sLinkedList.prototype.concat = function(LL2){
    var runner1 = this.head;
    var runner2 = LL2.head;
    while(runner1.next){
        runner1 = runner1.next;
    }
    runner1.next = runner2;
    console.log(this);
}


// Create list(s)
var list1 = new sLinkedList();
var node1 = new listNode(1);
var node2 = new listNode(2);
var list2 = new sLinkedList();
var node3 = new listNode(3);
var node4 = new listNode(4);

list1.head = node1;
node1.next = node2;

list2.head = node3;
node3.next = node4;

list1.concat(list2);
list1.display();
