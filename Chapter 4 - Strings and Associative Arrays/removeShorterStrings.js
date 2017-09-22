// Given a string array and value (length), remove any strings shorter than length from the array.

function removeAt(arr, index){
    for(var x = index; x < arr.length - 1; x++){
        arr[x] = arr[x + 1]
    }
    arr.length = arr.length - 1;
}

function removeShorterStrings(strArr, value){
    for (var x = 0; x < strArr.length; x++){
        if(strArr[x].length < value){
            removeAt(strArr, x);
        }
    }
    console.log(strArr);
    return strArr;
}

removeShorterStrings(["Testing", "Hello Word", "Anything New", "One"], 4);