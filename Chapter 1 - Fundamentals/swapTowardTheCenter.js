// Given array, swap first and last, third and third-to-last, etc. Input [true, 42, "Ada", 2, "pizza"] becomes ["pizza", 42, "Ada", 2, true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardTheCenter(arr){
    var temp;
    var i = 0;
    while(i < Math.floor(arr.length/2)){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        i = i+3;
    }
    console.log(arr);
}

swapTowardTheCenter([1,2,3,4,5,6]);
swapTowardTheCenter([true, 42, "Ada", 2, "pizza"]);
