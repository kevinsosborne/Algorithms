// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" - continuing the same cycle for each number up to (including) 12. 


function twelveBarBlues(){
    var bar = [0, "chick", "boom", "chick"];
    for (var x = 1; x <= 12; x++){
        for (var y = 0; y < bar.length; y++){
            if(y == 0){
                console.log(bar[y] + x);
            }
            else{
                console.log(bar[y]);
            }
        }
    }

}
twelveBarBlues();