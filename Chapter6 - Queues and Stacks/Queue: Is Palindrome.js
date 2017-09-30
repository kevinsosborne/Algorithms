// Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before existing. For storage, use on additional Stack.

// create a stack storage
function stack(){
    this.storage = [];
    
    this.push = function(){
        this.storage.push.apply(this.storage, arguments);
        }

    this.pop = function(){
        return this.storage.pop.apply(this.storage, arguments);
    }

    this.size = function(){
        return this.storage.length;
    }
    
    this.peek = function(){
        console.log(this.storage);
        return this.storage;
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
        return inbox;
    }

    this.dequeue = function(){
        if(outbox.size() === 0){
            for(var i = inbox.size() - 1; i >= 0; i--){
                outbox.push(inbox.storage[i]);
            }
            return outbox;
        }
    }
    this.isPalindrome = function(str){
        var word = str.toUpperCase();
        var word = word.replace(/ /g,'');        
        for(var i = 0; i < word.length; i++){
            this.enqueue(word.charAt(i));
        }
        this.dequeue();
        var original = inbox.storage.join("");
        var reverse = outbox.storage.join("");
        if(original === reverse){
            return true;
        }
        else{
            return false;
        }
    }
}

var Queue = new queue();
console.log(Queue.isPalindrome("Madam"));
