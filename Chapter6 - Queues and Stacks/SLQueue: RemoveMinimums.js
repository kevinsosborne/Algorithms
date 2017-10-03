// Create a standalone function to remove an SLQueue's lowest value, otherwise leaving values in the same sequence. Use only local variables; allocate no other objects. Remove all duplicates of this value.


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

function removeMinimums(queue){
    if(!queue.head){
        console.log("Empty list");
    }
    else{
        var min = queue.head.val;
        var runner = queue.head;
        while (runner){
            if(runner.val < min){
                min = runner.val;
            }
            runner = runner.next;
        }
        var previous = queue.head;
        var runner2 = queue.head.next;
        if(queue.head.val === min){
            queue.head = queue.head.next;
        }
        while(runner2){
            if(runner2.val === min){
                previous.next = runner2.next;
            }
            
            previous = runner2;
            runner2 = runner2.next;
        } 
    }
    console.log(min);
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
var node1 = new SLNode(0);
var node2 = new SLNode(1);
var node3 = new SLNode(2);

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

list1.Display();
removeMinimums(list1);
list1.Display();
