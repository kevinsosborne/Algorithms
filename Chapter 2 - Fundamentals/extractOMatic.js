// Create the extractDigit(num, digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824, 5), return 8. Given (1824, 0), return 0.

function extractDigit(num, digitNum){
    console.log(Math.trunc(num/Math.pow(10,digitNum)%10));
}

extractDigit(1824, 2);
