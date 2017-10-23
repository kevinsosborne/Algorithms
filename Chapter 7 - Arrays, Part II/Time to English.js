// You are given an integer representing the number of minutes that have elapsed since midnight. You should return a string representing the current time, in traditional spoken convention. Use numerals, except specifically the following words - midnight, noon, past, til, half, quarter. Examples: if given 30, return "half past midnight". If given 710, return "10 til noon". If given 1000, return "20 til 5 pm".

function timeToEnglish(num){
    if(num % 60 == 0 && (num / 60) < 12) {
        var currentHour = num / 60;
        return "It is " + currentHour + " am";
    }
    else if(num % 60 == 0 && (num / 60) > 12) {
        var currentHour = num / 60;
        var currentHour = currentHour % 12;
        return "It is " + currentHour + " pm";
    }
    else if(num % 60 == 30 && (num / 60) < 12){
        var currentHour = num / 60;
        if(Math.floor(currentHour) == 0){
            return "It is half past midnight"; 
        }
        else{
            return "It is half past " + Math.floor(currentHour) + " am";   
        }
    }
    else if(num % 60 < 30 && num % 60 != 25 && (num / 60) < 12) {
        var currentHour = num / 60;
        var currentMinute = num % 60;
        if(Math.floor(currentHour) == 0){
            return "It is " + num + " past midnight"; 
        }
        else{
            return "It is " + currentMinute + " past " + Math.floor(currentHour) + " am";   
        }

        }
    else if(num % 60 == 25 && (num / 60) < 12) {
        var currentHour = num / 60;
        var currentMinute = num % 60;
        if(Math.floor(currentHour) == 0){
            return "It is a quarter past midnight"; 
        }
        else{
            return "It is a quarter past " + Math.floor(currentHour) + " am";   
        }

        }
    else if(num % 60 == 45 && (num / 60) < 12) {
        var currentHour = num / 60;
        var currentMinute = num % 60;
        return "It is a quarter til " + Math.ceil(currentHour) + " am"
        }
    else if(num % 60 != 45 && num % 60 > 30 && (num / 60) < 12) {
        var currentHour = num / 60;
        var currentMinute = num % 60;
        var remainingMinute = 60 - currentMinute;
        return "It is " + remainingMinute + " til " + Math.ceil(currentHour) + " am"
        }
    }


console.log(timeToEnglish(105));