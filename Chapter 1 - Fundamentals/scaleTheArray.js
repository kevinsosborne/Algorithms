// Given array arr and number num, multiply each arr value by num, and return the changed arr.

function scaleTheArray(arr, num){
    var i = 0;
    while(i < arr.length){
        arr[i] *= num;
        i++;
    }
    console.log(arr);
}

scaleTheArray([1,2,3,4,5], 10);