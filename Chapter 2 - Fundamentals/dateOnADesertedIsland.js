// After a particularly fabulous New Year's Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island. He misses home in Burbank, but at least now he can spend plenty of time outdoors -- and you can't beat the commute! To pass the time until he is rescued, he counts sunrises.

/*
1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number (given 1, log "Sunday"). Use a SWITCH Statement. 
*/

function weekdayName(weekdayNum){
    switch(weekdayNum){
        case 1:
            console.log("Sunday");
            return "Sunday";
            break;
        case 2:
            console.log("Monday");
            return "Monday";
            break;
        case 3:
            console.log("Tuesday");
            return "Tuesday";
            break;
        case 4:
            console.log("Wednesday");
            return "Wednesday";
            break;
        case 5:
            console.log("Thursday");
            return "Thursday";
            break;
        case 6:
            console.log("Friday");
            return "Friday";
            break;
        case 7:
            console.log("Saturday")
            return "Saturday";
            break;
    }
}

// weekdayName(5);

/* 
2) Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1. 
*/

function weekdayName2(dayNum){
    if(dayNum > 365){
        console.log("Error: Out of range")
        return;
    }
    var weekdayNum = dayNum;
    while(weekdayNum > 7){
        weekdayNum -= 7;
    }
    return weekdayName(weekdayNum);
}

// weekdayName2(28);

/*
3) Create a new function someDays() that calls weekDayName2() seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!", and if it is a weekend day, add "Enjoy your day off!".
*/

function someDays(){
    for (var x = 1; x <= 17; x++){
        var number = Math.ceil(Math.random() * 364 + 1)
        var day = weekdayName2(number);
        switch (day){
            case "Saturday", "Sunday": console.log("Enjoy your day off!");
            default: console.log("Work hard!");
        }
    }
}function someDays(){
    for (var x = 1; x <= 17; x++){
        var number = Math.ceil(Math.random() * 364 + 1);
        var day = weekdayName2(number);
        switch (day){
            case "Saturday":
            case "Sunday": 
                console.log("    Enjoy your day off!");
                break;
            default: console.log("    Work hard!");
                break;
        }
    }
}

// someDays();

/* 
4) Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ("May" corresponds to 5). Use an array, without loops.
*/

function monthName(monthNum){
    var months = ["January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December"]
    return months[monthNum - 1];              
}

console.log(monthName(2));

