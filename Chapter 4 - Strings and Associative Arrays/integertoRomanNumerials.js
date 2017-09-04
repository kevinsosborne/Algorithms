// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this, I is 1, V is 5, x is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, and 349 is CCCIL and 444 is CDXLIV.

function integertoRomanNumerial(int){
    var lookup = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, V: 5, IV: 4, I: 1}
    var roman = "";
    for ( i in lookup){
        while(int >= lookup[i]){
            roman += i;
            int -= lookup[i];
        }
    }
    console.log(roman);
}

integertoRomanNumerial(43);
