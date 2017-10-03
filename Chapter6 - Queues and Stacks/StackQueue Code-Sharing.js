// As a design exercise, think through how you would combine the SLQueue you wrote previously with the SLStack class you just created. Would you use object oriented design? If so, which class inherits from which? Is there a parent class that is neither? Once you have done your thought work, now it is time to code it: rework what you wrote for SLQueueu and SLStack (or start from scratch, calling these SLQueue2 and SLStack2) with code sharing in mind. When you are done, someone should be able to create new queue and stack objects and use all the methods for those classes. Your combined codebase should be only about 15% larger than SLQueue.

class listNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class sLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    add(data){
        let runner = this.head;
        const newNode = new listNode(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            while(runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
    remove(){
        if(!this.head){
            return "List is empty";
        }
        else if(!this.head.next){
            this.head = null;
        }
        else{
            var prev = this.head;
            var curr = this.head.next;
            while(curr){
                if(!curr.next){
                    prev.next = curr.next;
                }
                prev = curr;
                curr = curr.next;
                }
            }
        }
    size(){
        var count = 0;
        var runner = this.head;
        while(runner){
            count++;
            runner = runner.next;
            }
        return "The list size is " + count;
    }
    display(){
        var count = 0;
        var runner = this.head;
        while(runner){
            count++;
            console.log(`Node ${count} has value ${runner.val}`);
            runner = runner.next;
        }
    }
}

class Stack extends sLinkedList {
}

class Queue extends sLinkedList {
    remove(){
        if(!this.head){
            console.log("This list is empty");
            return this;
        }
        else{
            var removedNode = this.head;
            this.head = this.head.next; 
            console.log(`Dequeued value: ${removedNode.val}`);
            return this;   
        }
    }
}

var stack = new Stack();
stack.add(10);
stack.display();
var queue = new Queue();
queue.add(1);
queue.add(2)
queue.display();
queue.remove();
queue.display();





