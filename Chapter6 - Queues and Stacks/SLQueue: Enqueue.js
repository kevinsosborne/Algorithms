// Create SLQueue method enqueue(val) to add the given value to end of our queue. Remember, SLQueue uses a singly linked list (not an array).

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

SLQueue.prototype.Enqueue = function(val){
    var newNode = new SLNode(val);
    if(!this.head){
        this.head = newNode;
        return this;
    }
    else{
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

}

SLQueue.prototype.Display = function(){
    var count = 0;
    var runner = this.head;
    while(runner){
        count++;
        console.log("Node " + count + " has value " + runner.val)
        runner = runner.next;
    }
}

var list = new SLQueue();
var node1 = new SLNode(1);
var node2 = new SLNode(2);
var node3 = new SLNode(3);

list.head = node1;
node1.next = node2;
node2.next = node3;

list.Display();
console.log(list.Enqueue(5));
list.Display();

  