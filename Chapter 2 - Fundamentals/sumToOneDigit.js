// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

function splitAndSum(num){
    var numString = num.toString();
    var sum = 0;
    for (var x = 0; x < numString.length; x++){
        sum += Number(numString.charAt(x));
    }
    return sum;
}

function sumToOne(num){
    while(num > 9){
        num = splitAndSum(num);
    }
    console.log(num);
}

sumToOne(928);