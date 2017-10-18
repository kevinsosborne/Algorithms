// Back in the Basic 13, you wrote code to compute an array's minimum and maximum values. You also wrote code to determine average value (the "the mean"). What about the "mode" - the most common value in that data set. Create a function that, given an array, returns the most frequent value in the array.

function mode(arr){
    var count = {};
    var i = 0;
    while(i < arr.length){
        if(!count[arr[i]]){
            count[arr[i]] = 1;
        }
        else{
            count[arr[i]]++;
        }
        i++
    }
    var largestCount = 0;
    var specialNum = 0;
    for (key in count){
        if(count[key] > largestCount){
            largestCount = count[key];
            specialNum = key;
        }
        else if(count[key] == largestCount){
            return [specialNum, key, largestCount];
        }
    }
    return [specialNum, largestCount]
}

console.log(mode([13, 18, 13, 14, 13, 16, 14,15, 21, 13,14,14]));