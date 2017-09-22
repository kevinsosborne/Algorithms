// Given a headnode, a lowVal and a highVal, remove the list any nodes that have values less than lowVal or higher than highVal. Return the new list.

// node function
function listNode(val){
    this.val = val;
    this.next = null;
}

// SLL function
function sLinekdList(){
    this.head = null;
}

sLinekdList.prototype.filter = function(lowVal, highVal){
    if(!this.head){
        return;
    }
    else{
        var runner = this.head;
        var previous;
        while(runner){
            if(runner.val < lowVal || runner.val > highVal){
                if(runner == this.head){
                    this.head = this.head.next;
                    runner = runner.next;
                    previous = runner;
                }
                else{
                    
                    runner = runner.next;
                    previous = 
                }
            }
        }
    }
}

