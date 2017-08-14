// You are passed an array containing strings. Working within that same array, replace each string with a number -- the length of the string at previous array index - and return the array.

function previousLengths(arr){
    var len = 0;
    var temp = arr[0];
    for (var i = 1; i < arr.length; i++){
        len = temp.length;
        temp = arr[i];
        arr[i] = len;
    }
    console.log(arr);
}

previousLengths(['Washington', 'Oregon', 'California'])