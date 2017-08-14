// Create a function that takes array of numbers. THe funciton should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){

    var low = arr[0];
    var high = arr[0];
    for( var i = 0; i < arr.length; i++){
        if( low > arr[i]){
            low = arr[i];
        }
        else {
            high = arr[i];
        }
    }
    console.log("Low Value is " + low + " High Value is " + high);
    return high;
}

printLowReturnHigh([30, 40, 20, 54, 4])