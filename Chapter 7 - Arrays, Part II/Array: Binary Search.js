// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, 'divide and conquer', taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!



function binarySearch(array, num){
    var left = 0;
    var middle = Math.floor(array.length/2);
    var right = array.length-1;
    while(left <= right){
        // console.log(middle);
        if(array[middle] == num){
            return middle;
        }
        if(num > middle){
            left = middle + 1;
            middle = Math.floor((left + right) / 2);
            console.log("Entering Greater Than Middle " + middle)
        }
        else{
            right = middle;
            middle = Math.floor(left + right / 2);
            console.log("Entering Less Than Middle " + middle)
            
        }
    }
}


function createNumArray(num){
    var i = 1;
    var arr = [];
    while(i <= num){
        arr.push(i);
        i++;
    }
    return arr;
}

var arr = createNumArray(100);
console.log(binarySearch(arr, 4));