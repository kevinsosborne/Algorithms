// Remove a Stack's minimum value, otherwise leaving values in order. If duplication min values are found, remove them all(see below). Use only one additional Queue (plus primitive local vars) for storage.

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

    this.findMin = function(){
        var min = storage[0];
        var count = 0;
        for(var i = 1; i < storage.length; i++){
            if(storage[i] < min){
                min = storage[i];
            }
            if(storage[i] === min){
                count++;
            }
        }
            console.log(min);
            return [min, count];
    }

    this.removeMin = function(){
        var minValStorage = [];   
        var minValue = this.findMin();        
        for(var i = storage.length -1; i >= 0; i--){
            var value = this.pop();
            if(value === minValue[0]){
                minValStorage.push(value);
            }
        }
        return minValStorage;
    }
}

// Stack Tests
var Stack = new stack();
Stack.push(1,50,40,1,1,10,100,20, 10);
// Stack.pop();
// Stack.size();
// Stack.peek();

console.log(Stack.removeMin());


