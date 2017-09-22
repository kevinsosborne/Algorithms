// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

function isPrime(integer){
    var Pcount = 0;
    var Ncount = 0;
    for(var i = 2; i < integer; i++){
        if(integer % i != 0){
            Pcount++;
        }
        else{
            Ncount++;
        }
    }
    if(Pcount == integer - 2){
        console.log("Integer " + integer + " is " + true);
    }
    if(Ncount > 0){
        console.log("Integer " + integer + " is " + false);
    }
}


isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(10);
isPrime(11);