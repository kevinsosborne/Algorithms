// Remove array duplicates. Do not alter original. Return new array with results 'stable' (original order). For [1,2,1,3,4,2], return [1,2,3,4].

function removeDuplicates(arr){
    var list = {};
    var newArray = [];
    var idx = 0;
    while(idx < arr.length){
        if(!list[arr[idx]]){
            list[arr[idx]] = 1;
        }
        idx++
    }
    for(var key in list){
        if(list[key] == 1){
            newArray.push(key);
        }
    }
    return newArray;
}

console.log(removeDuplicates([1,2,1,3,4,2]))