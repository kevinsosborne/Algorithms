// Create removeVal(ListNode, val). Given a pointer to the head ListNode, remove the node with the given val. Return the new list. What will do if val is not found?

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
    this.display = function(){
        if(!this.head){
            return this;
        }
        var runner = this.head;
        var string = "List of node values: ";
        while(runner){
            string += runner.val + " , ";
            runner = runner.next;
        }
        console.log(string);
        return this;
    }
}

sLinkedList.prototype.removeVal = function(val){
    if(!this.head){
        console.log("The list is empty");
        return this;
    }
    else{
            if(this.head.val === val){
                this.head = this.head.next;
                console.log(`${val} has been removed from the list`);
                return this;
            }
            else{
                var runner = this.head;
                while(runner.next){
                    if(runner.next.val === val){
                        runner.next = runner.next.next;
                        console.log(`${val} has been removed from the list`)
                        return this;
                    }
                    runner = runner.next;
                }
            }
            console.log(`${val} was not found in the list`);
            return this;
        }
}

var list = new sLinkedList();
var node1 = new listNode(5);
var node2 = new listNode(2);
var node3 = new listNode(6);

list.head = node1;
node1.next = node2;
node2.next = node3;

list.display();

list.removeVal(1);

list.display();