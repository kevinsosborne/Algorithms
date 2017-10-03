// Using only two Stack objects for the underlying data storage, recreate a Queue class.

// create a stack storage
function stack(){
    var storage = [];
    
    this.push = function(){
        storage.push.apply(storage, arguments);
        }

    this.pop = function(){
        return storage.pop.apply(storage, arguments);
    }

    this.size = function(){
        return storage.length;
    }
    
    this.peek = function(){
        console.log(storage);
        return storage;
    }
}

// Stack Tests
var Stack = new stack();
// Stack.push(10, 10);
// Stack.pop();
// Stack.size();
// Stack.peek();

// Queue

function queue(){
    var inbox = new stack;
    var outbox = new stack;

    this.list = function(){
        return {"inbox": inbox.peek(), "outbox": outbox.peek()};
    }

    this.enqueue = function(){
        inbox.push.apply(inbox, arguments);
    }

    this.dequeue = function(){
        if(outbox.size() === 0){
            while(inbox.size()){
                outbox.push(inbox.pop())
            }
            return outbox.pop();
        }
    }
}

var Queue = new queue();
Queue.enqueue(10, 20, 30, 40, 50, 70);
Queue.list();
Queue.dequeue();
Queue.list();

