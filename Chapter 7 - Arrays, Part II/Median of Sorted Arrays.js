// Given two arrays that are sorted but not necessarily the same length, find the median value. Given ([1,5,9],[1,2,3,4,5,6]), return 4. If the number of values is even, return the average of the two middle values. Given ([1,5,9],[1,2,3,4,5], return 3.5).

function medianOfSortedArrays(arr1, arr2){
    var arr3 = [];
    var totalLength = arr1.length + arr2.length;
    for(var i = 0; i < totalLength; i++){
        if(arr1.length != 0){
            arr3.push(arr1.pop())
        }
        else{
            arr3.push(arr2.pop());
        }
    }
    var arr3Length = arr3.length;
    for(var i = (arr3Length - 1); i >= 0; i--){
        for(var idx = (arr3Length - i); idx > 0; idx--){
            if(arr3[idx] < arr3[idx - 1]){
                // Swap
                var tmp = arr3[idx];
                arr3[idx] = arr3[idx - 1];
                arr3[idx - 1] = tmp;
            }
        }
    }

    if((arr3.length - 1) % 2 == 0){
        return arr3[(arr3.length - 1) / 2];
    }
    else{
        var number = (arr3.length - 1) / 2;
        var floor = Math.floor(number);
        var ceil = Math.ceil(number);
        // console.log(ceil);
        return (arr3[floor] + arr3[ceil]) / 2;
    }
}

console.log(medianOfSortedArrays([1,5,9],[1,2,3,4,5,6]));
console.log(medianOfSortedArrays([1,5,9],[1,2,3,4,5]));

