/* The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

1) Set aside the last digit; do not include it in these calculations (until step 5);
2) Starting from the back, multiply the digits in odd position (last, third-to-last, etc) by 2;
3) If any results are larger than 9, substract 9 from them;
4) Add all numbers (not just our odds) together;
5) Now add the last digit back in - the sum should be a multiplier of 10.
*/

function isCreditCardValid(digitArr){
    var lastDigit = digitArr[digitArr.length -1];
    var doubleDigit;
    var sum = 0;
    for(var i = digitArr.length - 2; i >= 0; i--){
        if(digitArr[i] % 2 == 1){
            doubleDigit = digitArr[i] * 2;
            if(doubleDigit > 9){
                doubleDigit -= 9;
            }
        sum += doubleDigit;
        }
        else{
            sum += digitArr[i];
        }
    }
    sum += lastDigit;
    if(sum % 10 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isCreditCardValid([5,4,7,3,1,0,9,3,2,9,9,5,5,3,2,8]));
console.log(isCreditCardValid([5,4,6,2,5,2,9,3,3,4,6,8,8,0,5,6]));