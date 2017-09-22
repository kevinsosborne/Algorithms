// Create a function that changes a given array to list each orginal element twice, retaining original order. Convert [4,"Ulysses", false] to [4,4,"Ulysses","Ulysses", 42,42,false,false].

function insertAt(arr, index, value){
    for(var i = arr.length - 1; i >= index; i--){
        arr[i + 1] = arr[i];
    }
    arr[index] = value;
}

function doubleTrouble(arr){
    for(var i = 0; i < arr.length; i+=2){
        insertAt(arr, i + 1, arr[i]);
    }
    console.log(arr);
}

doubleTrouble([4,"Ulysses", false]);