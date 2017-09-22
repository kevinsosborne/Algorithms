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

// console.log(monthName(2));

/* 
5) Now expand monthName() to create monthToDays(monthNum), return the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month. 
*/

function monthToDays(monthNum, year){
    if(monthNum > 12){
        console.log("Errors. Please enter a valid number");
    }
    switch (monthNum) {
        case 2:
            if(year % 4 == 0){
                return 29;
            }
            else{
                return 28;
            }
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
            break;
        default:
            return 30;
            break;
    }
}

console.log(monthToDays(4, 1988));

/* 
6) Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued. Is it spring yet? It might as well be. Build on monthName() to create daystoMonth(dayNum). If given a day number since the year began, return the current month (assume it is not a Leap Year). Given 75, return "March". 
*/


function daystoMonth(dayNum, year){
    var month = 1;
    var days = monthToDays(month, year);
    while(dayNum > days){
        month++;
        days += monthToDays(month, year);
    }
    return monthName(month);
}

function daystoMonthNum(dayNum, year){
    var month = 1;
    var days = monthToDays(month, year);
    while(dayNum > days){
        month++;
        days += monthToDays(month, year);
    }
    return month;
}


// console.log(daystoMonth(180, 2017));

/* 

7) Eduardo builds a Dojo bootcamp on the island. Initially his students only find Ninja Gold in caves, but eventually even his tree sloths can write code quickly! Dojo classes meet Monday thru Friday, so let's reincorporate weekday to our calculations. Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string. He hardly remembers that fateful New Year's Eve party, but he knows it was a Saturday. Given 142, return "Monday", May 22, 2017". 
*/

function fullDate(dayNum, year){
    var weekday = weekdayName2(dayNum);
    var month = daystoMonth(dayNum, year);
    var monthnum = daystoMonthNum(dayNum, year);
    if(monthnum > 1){
        for(var i = 1; i < monthnum; i++){
            dayNum = dayNum - monthToDays(i);
        }
    }
    var day = dayNum;
    return weekday + ", " + month + " " + day + ", " + year;
}

// console.log(fullDate(142, 2017));

/* 
8 ) Times files when you're at a Dojo - months in fact. Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016. This number can stretch into future years! You can assume that any year number divisible by four is a leap year and has a 29-day February. Given 8475, return "Thursday, March 15, 2040".
*/

function fullDate2(dayNum){
    var year = 2017;
    while(dayNum > 365){
        year += 1;
        if(year % 4 === 0){
            dayNum -= 366;
        }
        else{
            dayNum -= 365;
        }
    }
    var weekday = weekdayName2(dayNum);
    var month = daystoMonth(dayNum, year);
    var monthnum = daystoMonthNum(dayNum, year);
    if(monthnum > 1){
        for(var i = 1; i < monthnum; i++){
            dayNum = dayNum - monthToDays(i, year);
        }
    }
    var day = dayNum;
    return weekday + ", " + month + " " + day + ", " + year;
}

// console.log(fullDate2(8475));

/* 
9) Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. Build fullDate3(dayNum) to handle days up to 140,000! Node, years 2100, 2200, 2300 are not leap years (although 2400 is.) Given 139947, return "Tuesday, February 29, 2400".
*/

function fullDate3(dayNum){
    var year = 2017;
    while(dayNum > 365){
        year += 1;
        if(year % 4 === 0){
            dayNum -= 366;
        }
        else{
            dayNum -= 365;
        }
    }
    var weekday = weekdayName2(dayNum);
    var month = daystoMonth(dayNum, year);
    var monthnum = daystoMonthNum(dayNum, year);
    if(monthnum > 1){
        for(var i = 1; i < monthnum; i++){
            dayNum = dayNum - monthToDays(i, year);
        }
    }
    var day = dayNum;
    return weekday + ", " + month + " " + day + ", " + year;
}

console.log(fullDate2(139947));
