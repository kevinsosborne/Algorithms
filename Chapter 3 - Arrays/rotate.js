/* Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3], 1), change the array to [3,1,2]. Don't use built-in functions. 

Second: allow negative shiftBy(shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element. 
*/

function shiftOneRight(arr){
    var temp = arr[arr.length - 1]
    for(var i = arr.length -1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
}

function shiftOneLeft(arr){
    var temp = arr[0];
    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
}


function rotateArr(arr, shiftBy){
    if(shiftBy > 0){
        for (var i = 1; i <= (shiftBy % arr.length); i++){
            shiftOneRight(arr);
        }
    }
    else{
        for (var i = 1; i <= -(shiftBy % arr.length); i++){
            shiftOneLeft(arr);
        }
    }
    console.log(arr);
}

rotateArr([1,2,3], -2);