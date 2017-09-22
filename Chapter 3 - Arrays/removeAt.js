// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr, 0). 

function removeAt(arr, index){
    var removed = arr[index];
    for (var i = index; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1;
    console.log(arr);
}
removeAt([1,2,3,4,5], 0);