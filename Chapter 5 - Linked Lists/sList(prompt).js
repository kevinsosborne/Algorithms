// Create an SList with values entered. Use the prompt function to gather values one at a time from the user, putting each into a ListNode that you add to the end of the list. When the user hits [Cancel], return the list you have created.

// list node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinkedList(){
    this.head = null;
    this.display = function(){
        var runner = this.head;
        var string = "Node values in the list: ";
        while(runner){
            string += runner.val + ", ";
            runner = runner.next;
        }
        console.log(string);
        return this;
    }
}

var list = new sLinkedList();
var node1 = new listNode(10);
list.head = node1;

var response = prompt("Enter value for list node: ");
while(response){
    var newNode = new listNode(response);
    if(!list.head){
        list.head = newNode;
    }
    else{
        var runner = list.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
    }
    response = prompt("Enter value for list node: ");
}

list.display();