// Here's another game for our New Year's Eve party. Implement a '20-sided die' that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.

function roll20SideDouble(){
    return Math.ceil(Math.random()*19+1) 
}

function rollUntilDoubles(){
    var previousRoll;
    var doubleRoll = false;
    var min = 99;
    var max = 0;
    var sum = 0;
    var count = 0;
    var avg;
    while(doubleRoll === false){
        var newRoll = roll20SideDouble();
        count++;
        sum += newRoll;
        if(newRoll > max){
            max = newRoll;
        }
        if(newRoll < min){
            min = newRoll;
        }
        if(previousRoll == newRoll){
            doubleRoll = true;
        }
        else{
            previousRoll = newRoll;
        }
    }
    avg = sum / count;
    console.log("Previous Roll " + previousRoll + " Current Roll " + newRoll + " Sum " + sum + " Max " + max + " Min " + min + " Avg " + avg.toFixed(2));
}

rollUntilDoubles();