// Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before existing. For storage, use on additional Stack.

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
            console.log(inbox.storage)
            for(var i = 0; i < inbox.size(); i++){
                // outbox.push(inbox);
            }
            return;
        }
    }
    this.isPalindrome = function(str){
        var word = str;
        var palindrome = true;
        for(var i = 0; i <= word.length; i++){
            this.enqueue(word.charAt(i));
        }
        
        // while(palindrome && inbox.size() > 1){
        this.dequeue();
        // }
    }
}

var Queue = new queue();
Queue.isPalindrome("Race Car");
Queue.list();


