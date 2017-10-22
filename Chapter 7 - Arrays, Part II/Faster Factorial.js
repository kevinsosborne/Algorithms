// Remember Factorial(num)? It returned the product of positive integers from 1 to num. Examples: Factorial(1) = 1, Factorial(2) = 2. Facotiral(3) = 6. For these purposes, Factorial(0) = 1. Recreate this function, but usa  time-space tradeoff to accelerate the average running time.



class fasterFactorial{
    constructor(){
        this.integers = {};
    }
    Factorial(num){
        if(!this.integers[num]){
            var val = 1;
            var i = 2;
            while(i <= num){
                val *= i
                i++;
            }
            this.integers[num] = val;
            return val;
        }
        else{
            return this.integers[num];
        }
    }
}

var f = new fasterFactorial();
console.log(f.Factorial(1));
console.log(f.Factorial(2));
console.log(f.Factorial(3));
console.log(f.Factorial(2));
console.log(f.Factorial(4));
console.log(f.Factorial(500));

var start = new Date();

setTimeout(function (argument) {
    console.log(f.Factorial(500));
    var end = new Date() - start;
    console.info("Execution time: %dms", end);
}, 1000);