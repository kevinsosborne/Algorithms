// Given array, remove and return the value at the beginnng of the array. Do this without using any build-in array methods except pop().

function popFront(arr){
    var removed = arr[0];
    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop()
    console.log(arr);
    return removed;
}

console.log(popFront([5,4,3,2,1]));