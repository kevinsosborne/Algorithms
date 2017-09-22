// Create a function to generate Fibonacci numbers. In this famous mathemathic sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one arguement, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1(given), fibonacci(2) = 1 (fib(0) + fib(1), or 0 + 1). 

function fibonacci(num){
    var a = 1, b = 0, temp;

    while(num >= 1){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    console.log(b);
    return b;
}

fibonacci(3);