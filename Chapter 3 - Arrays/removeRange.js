// Given array, and indicies start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70], 2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end){
    var numberOfRemovedElements = end - start + 1;
    for( var x = 0; x <= end - start; x++){
        arr[start + x] = arr[end + 1 + x];
        console.log(arr);
    }
    arr.length -= numberOfRemovedElements;
    return arr;
}

console.log(removeRange([20,30,40,50,60,70], 2,4));