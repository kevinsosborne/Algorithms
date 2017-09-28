// Given two Stack objects, create a standalone function to retun whether they are equal. Stacks are equal only if they have equal elements in identical order. You can use an additional third Stack for stroage; you will need it because you must return the given Stacks to their original condition upon exit.

function listNode(val){
    this.val = val;
    this.next = null;
}

function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.size = function(){
    var count = 0;
    var runner = this.head;
    while(runner){
        count++;
        runner = runner.next;
    }
    return count;
}

function compare(LL1, LL2){
    if(!LL1.head && !LL2.head){
        return false;
    }
    if(LL1.size() != LL2.size()){
        return false;
    }
    var runner1 = LL1.head;
    var runner2 = LL2.head;
    while(runner1 && runner2){
        if(runner1.val != runner2.val){
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    return true;
}

var list1 = new sLinkedList();
var node1 = new listNode(0);
var node2 = new listNode(2);
var node3 = new listNode(2);

list1.head = node1;
node1.next = node2;
node2.next = node3;

var list2 = new sLinkedList();
var node4 = new listNode(1);
var node5 = new listNode(2);
var node6 = new listNode(2);

list2.head = node4;
node4.next = node5;
node5.next = node6;

console.log(compare(list1, list2));