// Given array, create a function to return a new array where each value in the orignal has been doubled. Calling double ([1, 2, 3]) should return [2,4,6] without changing orignal. 

function doubleVision(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        newarr[i] = arr[i] * 2;
    }
    console.log(newarr);
}

doubleVision([2,4,8,12])