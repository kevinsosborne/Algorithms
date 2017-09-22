// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1, -3,5], return [-1,-3,-5].

function outlookNegative(arr){
    var newarr = [];
    var i = 0;
    while (i < arr.length){
        if(arr[i] > 0){
            newarr[i] = arr[i] * -1;
        }
        else{
            newarr[i] = arr[i];
        }
        i++;
    }
    console.log(newarr);
}

outlookNegative([5,6,-4,3]);