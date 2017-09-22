// Sam thinks Tad might be somewhere in a very long line waitining to attend the Superman movie. Givena  ListNode pointer and val, return weather val is found in any node in the list.


//Node Function
function node(val){
    this.val = val;
    this.next = null;
}

//Linked List Function
function sLinkedList(){
    this.head = null;
    return this;
}

function contains(LL, val){
    var N = LL.head;
    while(N){
        if(N.val == val){
            return true;
        }
        N = N.next;
    }
    return false;
}

// Create the list(s)
var list1 = new sLinkedList();
var node1 = new node(1);
var node2 = new node(2);
var node3 = new node(3);
list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(contains(list1, 2));