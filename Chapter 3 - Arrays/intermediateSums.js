// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenely with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

function insertAt(arr, index, value){
    for(var i = arr.length - 1; i >= index; i--){
        arr[i + 1] = arr[i];
    }
    arr[index] = value;
    return arr;
}

function sumofTenElements(arr, startPos){
    var sum = 0;
    for (var x = 0; x < 10; x++){
        sum += arr[startPos + x];
        if(startPos + x == arr.length -1){
            return [sum, arr.length];
        }
    }
    return [sum, startPos + 10];
}

function intermediateSums(arr){
    for(var x = 0; x < arr.length; x += 11){
        var result = sumofTenElements(arr, x);
        insertAt(arr, result[1], result[0]);
    }
    return arr;
}


console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]));