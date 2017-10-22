// Why stop with fibonacci? Create a function to retrieve a "Tribonacci" number, which we wil define as the sum of the previous 3 values. Triboaccis start with {0,0,1,2,4,7,13,24,44,81,...}. Again, use a time-space tradeoff to make it fast.

class Tribonacci{
    constructor(){
        this.storage = {};
    }
    trib(num){
        // console.log(this.storage[num]);
        var temp = num;
        if(!this.storage[num]){
            var a = 1, b = 0, c = 0, result;
            if(num < 2){
                return 0;
            }
            else{
                while(num >= 2){
                    result = a + b + c;
                    a = b;
                    b = c;
                    c = result;
                    num--;
                }            
                this.storage[temp] = c;    
                return this.storage[temp];
            }
        }
        else{
            return this.storage[temp];
        }
    }
    display(){
        return this.storage;
    }
}

var x = new Tribonacci();
console.log(x.trib(6));
// console.log(x.trib(6));
