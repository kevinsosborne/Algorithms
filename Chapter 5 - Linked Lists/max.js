// American idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list's largest val.

// node function
function node(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

// max function
function max(LL){
    var currentnode = LL.head;
    var max = LL.head.val;
    while(currentnode){
        if(currentnode.val > max){
            max = currentnode.val;
        }
        currentnode = currentnode.next;
    }
    return max;
}

var list = new sLinkedList();
var node1 = new node(30);
var node2 = new node(25);
var node3 = new node(2);

list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(max(list));