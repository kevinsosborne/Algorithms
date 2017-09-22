/* Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100, 4000000).
*/

function threesFives(){
    var i = 100;
    var count = 0;
    while (i <= 400000){
        if(i % 3 == 0 && i % 5 == 0){
            count += i;
        }
        i++;
    }
    console.log(count);
}

threesFives();

function threesFives(start, end){
    var i = start;
    var count = 0;
    while (i <= end){
        if(i % 3 == 0 && i % 5 == 0){
            count += i;
        }
        i++;
    }
    console.log(count);
}

threesFives(0, 30);