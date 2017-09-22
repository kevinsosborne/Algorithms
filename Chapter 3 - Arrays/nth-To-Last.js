// Return the element that is N-from-array's-end. Given ([5,2,3,6,4,9,7], 3), return 4. If the array is too short, return null.


function nthToLast(arr, index){
    if(index > arr.length){
        return null;
    }
    var pointer = arr.length - index;
    console.log(arr[pointer]);
    return arr[pointer];
}

nthToLast([5,2,3,6,4,9,7], 8)