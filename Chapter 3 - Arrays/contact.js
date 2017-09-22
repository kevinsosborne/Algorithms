// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return  a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat(['a', 'b'], [1,2]) should return new array ['a','b', 1, 2].

function arrConcat(arr1, arr2){
    var newarr = [];
    for (var i = 0; i < arr1.length; i++){
        newarr[i] = arr1[i];
    }
    for(var i = 0; i < arr2.length; i++){
        newarr[newarr.length] = arr2[i];
    }
    console.log(newarr);
}

arrConcat(['a', 'b'], [1,2]);