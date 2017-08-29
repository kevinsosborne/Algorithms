// Alan is good at breaking secret codes. One method is to eliminate values that lie within in a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No build-in array functions. 

function removeAt(arr, index){
    var removed = arr[index];
    for (var i = index; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1;
    return arr;
}

function filterRange(arr, min, max){
    for(var i = arr.length - 1; i >= 0; i--){
        if(arr[i] < min || arr[i] > max){
            removeAt(arr, i);
        }
    }
    console.log(arr);
}

filterRange([1,2,3,4,5,6], 4, 6);