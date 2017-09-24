// Given a pointer to the first node in a singly linked list, return the second-largest value contained in the list. 

// node funciton
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
}

sLinkedList.prototype.secondLargestValue = function(){
    var runner = this.head;
    var max = this.head.val;
    var secondMax = null;
    if(this.head == null){
        return this;
    }
    else{
        while(runner){
            if(runner.val > max){
                console.log("Runner Val" + runner.val);
                secondMax = max;
                max = runner.val;
            }
            else{
                if(runner.val > secondMax && runner.val < max){
                    secondMax = runner.val;
                }
            }
            runner = runner.next;
        }
        console.log(secondMax);
    }
}

var list = new sLinkedList();
var node1 = new listNode(-55);
var node2 = new listNode(3);
var node3 = new listNode(5);
var node4 = new listNode(4);

list.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

list.secondLargestValue();