// Change is invitable (especially when breaking a twenty). Make generateCoinChange (cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

function generateCoinChange(cents){
    var quarters = 0;
    var dimes = 0;
    var nickles = 0;
    var pennies = 0;
    
    if(cents / 25 ){
        quarters = Math.floor(cents / 25);
        cents = cents % 25; 
    }
    if(cents / 10){
        dimes = Math.floor(cents / 10);
        cents = cents % 10; 
    }
    if(cents / 5){
        nickles = Math.floor(cents / 5);
        cents = cents % 5; 
    }
    if(cents / 1){
    pennies = Math.floor(cents / 1);
    }

    console.log("Quarters: " + quarters + "; Dimes: " + dimes + "; Nickles: " + nickles + "; Pennies: " + pennies)
}

generateCoinChange(65);