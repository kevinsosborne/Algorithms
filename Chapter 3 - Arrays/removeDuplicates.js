/* Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all dupllicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
*/

function removeAt(arr, index){
    var removed = arr[index];
    for (var i = index; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1;
    return arr;
}

function removeDuplicates(arr){
    for(var i = 0; i < arr.length - 1; i++){
        while(arr[i] == arr[i + 1]){
            removeAt(arr, i);
        }
    }
    console.log(arr);
}        


removeDuplicates([1,1,2,3,4,4,5,5,5,6]);