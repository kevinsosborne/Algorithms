// Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You may create one additional SLQueue, if needed. 


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

SLQueue.prototype.interleaveQueue = function(){
    var count = 0;
    var runner1 = this.head;
    
    while(runner1){
        count++;
        runner1 = runner1.next;
    }

    count = Math.floor(count/2);
    var runner2 = this.head;
    var newList1 = new SLQueue();
    var newList2 = new SLQueue();
    newList1.head = this.head;
    
    while(count > 0){
        runner2 = runner2.next;
        count --;        
    }
    
    newList2.head = runner2.next;
    runner2.next = null;

    // return [newList1, newList2];
    
    var runner3 = newList2.head;
    var runner4 = newList1.head;
    
   
        temp1 = runner4.next;
        temp2 = runner3.next;
        runner4.next = runner3;
        runner3.next = temp1;
        newList2.head = temp2;
    

    return [newList1, newList2];


    // var runner1 = this.head;
    // var runner2 = this.head.next;
    // var runner3 = this.head.next.next;
    // var runner4 = this.head.next.next.next;
    // var temp;
    
    // runner1.next = runner4;
    // temp = runner4.next;
    // runner4.next = runner2;
    // runner3.next = temp;

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
var node4 = new SLNode(4);
var node5 = new SLNode(5);

list1.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// list1.Display();
var newLists = list1.interleaveQueue();
var newList1 = newLists[0];
var newList2 = newLists[1];
newList1.Display();
console.log("********");
newList2.Display();