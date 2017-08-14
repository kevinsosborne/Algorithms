// Given array of numbers, create function to replace last value with number of positive values. Example, countPositive([-1, 1, 1, 1]) changes array to [-1,1,1,3] and return it.

function countPositive(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}

console.log(countPositive([-1, -4, 4, 3, 2, 6, -9]));