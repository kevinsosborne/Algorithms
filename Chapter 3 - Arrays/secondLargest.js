// Return the second-largest element of an array. Given [42,1,4, Math.PI, 7], return 7. If the array is too short, return null.

function secondLargest(arr){
    var secondlargest = null;
    var largest = arr[0];
    if(arr.length < 2){
        return null;
    }
    for (var i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            secondlargest = largest;
            largest = arr[i];
        }
        else{
            if(arr[i] > secondlargest){
                secondlargest = arr[i];
            }
        }
    console.log(secondlargest);
    }
}

secondLargest([42,1,4, Math.PI, 7]);