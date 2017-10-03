// Given two SLQueue objects, create a standalone function that returns whether they are equal. Queues are equal only if they have equal elements in identical order. Allocate no other object, and return the queues in their original condition upon exit. 

// node function
function SLNode(value){
    this.val = value;
    this.next = null;
}

// queue function
function SLQueue(){
    var head = null;
    var tail = null;
}



function compare(q1, q2){
    if(!q1.head && !q2.head){
        return true;
    }
    if(q1.Size() != q2.Size()){
        return false;
    }
    var runner1 = q1.head;
    var runner2 = q2.head;
    while(runner1 && runner2){
        if(runner1.val != runner2.val){
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    return true;
}

SLQueue.prototype.Size = function(){
    if(!this.head){
        console.log("This list is empty");
        return this;
    }
    else{
        var runner = this.head;
        var count = 0;
        while(runner){
            count++;
            runner = runner.next;
        }
        console.log(`Total size of queue is ${count}`);
        return count;
    }
}

SLQueue.prototype.Display = function(){
    var count = 0;
    var runner = this.head;
    while(runner){
        count++;
        console.log(`Node ${count} has value ${runner.val}`);
        runner = runner.next;
    }
}

var list1 = new SLQueue();
var node1 = new SLNode(1);
var node2 = new SLNode(2);
var node3 = new SLNode(3);

var list2 = new SLQueue();
var node4 = new SLNode(1);
var node5 = new SLNode(2);
var node6 = new SLNode(3);

list1.head = node1;
node1.next = node2;
node2.next = node3;

list2.head = node4;
node4.next = node5;
node5.next = node6;

console.log(compare(list1, list2));

