// As before, given a number of U.S cents, return the optimal configuration of coins, in an object.

function coinChangeWithObjects(num){
    var coins = {"quarter": 0,
                "dime": 0,
                "nickle": 0,
                "penny": 0
                        }
        if(num / 25){
            coins.quarter = Math.floor(num / 25);
            num = num % 25;
        }
        if(num / 10){
            coins.dime = Math.floor(num / 10);
            num = num % 10;
        }
        if(num / 5){
            coins.nickle = Math.floor(num / 5);
            num = num % 5;
        }
        if(num / 1){
            coins.penny = Math.floor(num / 1);
            num = num % 1;
        }
    return "Quarters: " + coins.quarter + ", Dimes: " + coins.dime + ", Nickles: " + coins.nickle + ", Pennies: " + coins.penny;
}

console.log(coinChangeWithObjects(99));