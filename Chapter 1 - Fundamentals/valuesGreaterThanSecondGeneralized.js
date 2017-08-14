// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function valuesGreaterThanSecondGeneralized(arr){

    if(arr.length < 2){
        return arr;
    }

    var newarr = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            newarr.push(arr[i]);
            count++;
        }
    }
    console.log("The total count is " + count);
    console.log("The new arr is " + newarr);
}

valuesGreaterThanSecondGeneralized([1,3,5,7,8,13]);
valuesGreaterThanSecondGeneralized([1]);
