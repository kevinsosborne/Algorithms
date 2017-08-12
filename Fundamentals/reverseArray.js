// Given array, wrtie a function that reverses values, in-place. Example: reverse ([3,1,6,4,2]) returns same array, containing ([2,4,6,1,3]).

function reverseArray(arr){
    var temp;
    var i = 0;
    while(i < Math.floor(arr.length/2)){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp;
        i++;
    }
    console.log(arr);
}

reverseArray([1,2,3,4,5])