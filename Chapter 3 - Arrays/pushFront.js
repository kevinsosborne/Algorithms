// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, value){
    for(var i = 0; i < arr.length; i++){
        arr[i + 1] = arr[i];
    }
    arr[0] = value;
}