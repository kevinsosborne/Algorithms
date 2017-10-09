// Here, a balance point is on an index, not between indicies. Return the balance index, where sums are equal on either side (exclude its own value), Return -1 if none exist. Ex.: [-2,5,7,0,3] -> 2, but [9, 9] -> -1

function balanceIndex(arr){
    var totalCount = arr[0];
    for (var i = 1; i < arr.length; i++){
        totalCount += arr[i];
    }
    var leftCount = 0;
    for(var idx = 0; idx < arr.length; idx++){
        totalCount -= arr[idx]; 
        console.log("total Count: " + totalCount + " left Count: " + leftCount);       
        if(leftCount == totalCount){
            return idx;
        }
        leftCount += arr[idx];        
        
    }
    return -1;
}

console.log(balanceIndex([-2,5,7,0,3]));