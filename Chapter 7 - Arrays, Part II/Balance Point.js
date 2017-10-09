// Write a function that returns whether the given array has a balance point between indices, where one side's sum is equal to the other's. Example: [1,2,3,4,10] -> true (between indices 3 & 4), but [1,2,4,2,1] -> false.

function balPoint(arr){
    // Get the Total Sum of the Array;
    var sumTotal = arr[0];
    for (var idx = 1; idx < arr.length; idx++){
        sumTotal += arr[idx];
    }
    var leftTotal = 0;
    for (idx = 0; idx < arr.length; idx++){
        sumTotal -= arr[idx];
        console.log(sumTotal);
        leftTotal += arr[idx];
        console.log(leftTotal);
        if(sumTotal == leftTotal){
            return [true, sumTotal, leftTotal];
            }

        }
        return false;
}        

var arr = [1,2,3,4,10];
console.log(balPoint(arr));