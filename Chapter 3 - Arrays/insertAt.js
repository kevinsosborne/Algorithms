// Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val).

function insertAt(arr, index, value){
    for(var i = arr.length - 1; i >= index; i--){
        arr[i + 1] = arr[i];
    }
    arr[index] = value;
    console.log(arr);
}

insertAt([1,2,3,4,5], 1, 10);