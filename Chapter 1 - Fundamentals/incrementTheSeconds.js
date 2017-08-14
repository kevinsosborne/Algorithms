// Given arr, add 1 to odd elements ([1], [3], etc. console.log all values and return arr)

function incrementTheSeconds(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            arr[i]+= 1;
        }
    }
    console.log(arr);
    return arr;
}

incrementTheSeconds([1,2,3,4,5,6,7,8,9,10]);