// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array(not a copy), preserving non-negative order. As always, do not use built-in array functions.

function removeAt(arr, index){
    var removed = arr[index];
    for (var i = index; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1; 
    return arr;
}


function removeNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            console.log(removeAt(arr, i));
        }
    }
    return arr;
}

console.log(removeNegatives([-1,1,-2,2,-3,3]));