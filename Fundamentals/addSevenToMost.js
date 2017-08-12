// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the orignal array.

function addSevenToMost(arr){
    var newarr = [];
    var i = 1;
    while (i < arr.length){
        newarr[i-1] = arr[i]+7;
        i++;
    }
    console.log(newarr);
}

addSevenToMost([10,20,30,40,50]);