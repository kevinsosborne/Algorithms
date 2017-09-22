// Just the Facts, ma'am. Factoria;s, this is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). FOr example, facotiral(3) = 6(or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num){
    var val = 1;
    var i = 2;
    while(i <= num){
        val *= i
        i++;
    }
    console.log(val);
}

factorial(1);
factorial(2);
factorial(3);
factorial(5);