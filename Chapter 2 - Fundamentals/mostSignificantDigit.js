// If you already know who Ada Lovelance is, that's great! In a History of Science, she is significant. GIven number of any size, return the most significant digit. IF you already know what strings are, that's great! However, don't use them here. Hint: use WHILE to bring the most significant digit into range where you can use the friendly modulus operator (%). The most significant digit is the leftmost non-zero digit of a number. Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.

function mostSignificantDigit(num){
    var negative = false;
    if (num < 0){
        num = num * -1;
        negative = true;
    }
    while(num > 10 || num < 1){
        if(num > 10){
            num = num / 10;
        }
        else{
            num = num * 10;
        }
    }
    if (negative == false){
        return Math.trunc(num);
    }
    else{
        return -(Math.trunc(num))
    }
}

console.log(mostSignificantDigit(5000));
console.log(mostSignificantDigit(-5000));
console.log(mostSignificantDigit(.32));
console.log(mostSignificantDigit(0009.32));