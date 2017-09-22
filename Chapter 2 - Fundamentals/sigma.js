// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: signma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num){
    var value = 0;
    var i = 1;
    while(i <= num){
        value += i
        i++;
    }
    console.log(value);
}

sigma(3);