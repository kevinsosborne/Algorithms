// Use time-space tradeoff to acceralte running trime of iFib(num) that returns numth number in the Fibonacci sequence. Recall iFib(0) = 0, iFib(1) = 1, iFib(2) = 1, iFib(3) = 2.


class fibonacci{
    constructor(){
        this.storage = {};
    }
    fib(num){
        // console.log(this.storage[num]);
        var temp = num;
        if(!this.storage[num]){
            var a = 1, b = 0, result;
            while(num >= 1){
                result = a + b;
                a = b;
                b = result;
                num--;
            }            
            this.storage[temp] = b;    
            return this.storage[temp];
        }
        else{
            return this.storage[temp];
        }
    }
    display(){
        return this.storage;
    }
}

var x = new fibonacci();
console.log(x.fib(0));
console.log(x.display());
console.log(x.fib(6));
