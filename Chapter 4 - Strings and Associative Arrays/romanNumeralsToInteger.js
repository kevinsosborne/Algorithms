// Sept 16, 2014 headline: "Ancient Computer Found in Roman Shipwreck". Comprising 30 bronze gears, its wooden frame features 2000 characters. Givena  string containing a Roman numeral represnetation of a positive integer, return the integer. Remember that III is 3, DCIX is 609, and MXDII is 1492. 

function processDecimal(Decimal, lastNumber, lastDecimal){
    if(lastNumber > Decimal){
        return lastNumber - Decimal;
    }
    else{
        return lastNumber + Decimal;
    }
}

function romanNumeralsToIntegers(str){
    str = str.toUpperCase();
    console.log(str);
    var int = 0;
    var lastNumber = 0;
    var convertToDecimal;
    for (var x = str.length - 1; x >= 0; x--){
        convertToDecimal = str.charAt(x);
        console.log(int);
    switch (convertToDecimal) {
        case 'M':
            int = processDecimal(1000, lastNumber, int);
            lastNumber = 1000;
            break;
        case 'D':
            int = processDecimal(500, lastNumber, int);
            lastNumber = 500;
            break;
        case 'C':
            int = processDecimal(100, lastNumber, int);
            lastNumber = 100;
            break;
        case 'L':
            int = processDecimal(50, lastNumber, int);
            lastNumber = 50;
            break;
        case 'X':
            int = processDecimal(10, lastNumber, int);
            lastNumber = 10;
            break;
        case 'V':
            int = processDecimal(5, lastNumber, int);
            lastNumber = 5;
            break;
        case 'I':
            int = processDecimal(1, lastNumber, int);
            lastNumber = 1;
            break;
    } 
}
    console.log(int); 
}

romanNumeralsToIntegers('DCIX');