// Flatten a given array, eliminating nested & empty arrays. Do not alter it; return a new one retaining order. For [1,[2,3],4,[]], return [1,2,3,4].

function flattenArray(arr){
    var newArray = [];
    for (var i = 0; i < arr.length; i++){        
        if(arr[i].length > 0){
            console.log(arr[i].length);
            for (var idx = 0; idx < arr[i].length; idx++){
                // console.log(arr[i][idx]);
                newArray.push(arr[i][idx]);
            }
        }
        else{
            if(arr[i].length != 0){
                newArray.push(arr[i]);                               
            }
        }
    }
    return newArray    
}


console.log(flattenArray([1,[2,3],4,[]]));