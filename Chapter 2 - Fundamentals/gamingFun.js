// It's New Year's Eve, so let's play some dice games. It'll be fun. What could go wrong?
// 1. Create function rollOne() to return a radnomly selected integer between 1 and 6 (inclusive);
// 2. Second, create a funciton playFives(num), which should call rollOne() multiple times - 'num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne(), returns, and if that return value is 5, also print "That's good luck!"
// Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each cell). After the last of the these eight calls, it should print out the lowest and heightest values that it received from rollOne, among those eight calls. 

function rollOne(){
    return Math.trunc(Math.random() * 6);
}

function playFives(num){
    var i = 0;
    while( i <= num){
    var value = rollOne();
    console.log(value);
    if (value == 5){
        console.log("That's good!")
    }
    i++;
    }
}

function playStatistics(){
    var random;
    var max = 0;
    var min = 99;
    var sum = 0;
    for (var idx = 0; idx < 8; idx++){
        random = rollOne();
        sum += random;
        if (random > max){
        max = random;
        }
        if(random < min){
            min = random;
        }
    }
    console.log("Sum " + sum + " Max " + max + " Min " + min);
}

playStatistics();

playFives(5);

