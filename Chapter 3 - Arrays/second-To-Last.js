// Return the second-to-last element of an array. Given [42, true, 4, "Kate", 7], return "Kate". If array is too short, return null.

function secondToLast(arr){
    if(arr.length > 1){
        return arr[arr.length - 2];
    }
    else{
        return null;
    }
}

console.log(secondToLast([42, true, 4, "Kate", 7]));