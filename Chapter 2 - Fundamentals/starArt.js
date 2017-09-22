/* Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and astericks ('*'), sometimes called stars. You should print the given numbers of astericks consecutively. Depending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).

* write a function drawLeftStars(num) that accepts a number and prints that many astericks.

* write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. That num characters should be astericks, the other 75 should be spaces.

* write a function drawCenteredStars(num) that prints 75 characters total. Stars should be centered in the 75. The middle num characters should be astericks; the rest of the 75 spaces.

*/

function drawLeftStars(num, char){
    if(num <= char){
        var diff = char - num;
        var symbols = "";
        for ( var i = 1; i <= num; i++){
            symbols += "*";
        }
        for (var idx = 1; idx <= diff; idx++){
            symbols += " ";
        }
    console.log(symbols);
    }
    else{
        console.log("num exceeds char")
    }
    
}
drawLeftStars(4, 5);

function drawRightStars(num, char){
    if(num <= char){
        var diff = char - num;
        var symbols = "";
        for ( var i = 1; i <= num; i++){
            symbols += "-";
        }
        for (var idx = 1; idx <= diff; idx++){
            symbols += "*";
        }
    console.log(symbols);
    }
    else{
        console.log("num exceeds char")
    }
    
}
drawRightStars(4,5);

function drawCenteredStars(num, char){
    if(num <= char){
        var symbols = "";
        var side = ((char - num)/2);
        for (var i = 1; i <= char; i++){
            if(i <= side){
                symbols += "-";
            }
            else if(i > side && i <= num+side){
                symbols += "*";
            }
            else if(i > num+side){
                symbols += "-";
            }
        }
        console.log(symbols);
    }
}

drawCenteredStars(5, 75);
