// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

// Node Function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL Function
function sLinkedList(){
    this.head = null;
}

// Length Function
function length(LL){
   var N = LL.head;
   var count = 0;
   while(N != null){
       count++;
       N = N.next;
   }
   return count;
}


var list1 = new sLinkedList();
var node1 = new node(1);
var node2 = new node(2);
var node3 = new node(3);
list1.head = node1;
node1.next = node2;
node2.next = node3;

console.log(length(list1));