// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr){
    
    console.log(arr[arr.length-2])

    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            return arr[i];
        }
    }
}

console.log(printOneReturnAnother([2,2,3,5,7,9]))