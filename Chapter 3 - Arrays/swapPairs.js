/* Swap position of successive pairs of values of given array. If length is odd, do not change the final element. For [1, 2, 3, 4], return [2, 1, ,4, 3]. For example, change input["Brendan", true, 42] to [true, "Brendan", 42].
*/

function swapPairs(arr){
    var temp;
    if(arr.length % 2 === 0){
        for (var i = 0; i < arr.length; i+=2){
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    else{
        for (var i = 0; i < arr.length - 1; i+=2){
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    console.log(arr);
}
swapPairs([1,2,3,4]);
swapPairs([1,2,3,4,5]);