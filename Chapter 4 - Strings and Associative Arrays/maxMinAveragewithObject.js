// Given an array, return an object containing the array's max, min, and average values.

function maxMinAverageWithObject(arr){
    var values = {"max": arr[0],
                  "min": arr[0],
                  "sum": 0,
                  "avg": 0}
    for (var x = 1; x < arr.length; x++){
        if(arr[x] > values.max){
            values.max = arr[x];
        }
        if(arr[x] < values.min){
            values.min = arr[x];
        }
        values.sum += arr[x];
    }
    values.avg = values.sum / arr.length;
    return values;
}
console.log(maxMinAverageWithObject([23,4,6,45,23,7,8,1]));