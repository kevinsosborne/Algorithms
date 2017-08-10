// Given an array, return the sum of the first value in the array, plus the array's length. What happens if the array's first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr){
    
    var sum = 0;

    if (Number.isInteger(arr[0]) && Number.isInteger(arr.length)){
        sum = arr[0] + arr.length;
    }
    console.log(sum);
}

firstPlusLength(['Hello',5,11]);
firstPlusLength([10,5,11]);