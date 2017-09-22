// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indicies starting with first array. Extra values from either array should be included afterwards. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

function zipIt(arr1, arr2){
    var x = 0;
    var zipArray = [];
    while(x < arr1.length || x < arr2.length){
        if(arr1[x] != undefined){
            zipArray[zipArray.length] = arr1[x];
        }
        if(arr2[x] != undefined){
            zipArray[zipArray.length] = arr2[x];
        }
        x++;
    }
    console.log(zipArray);
}

zipIt([1,2],[10,20,30,40]);