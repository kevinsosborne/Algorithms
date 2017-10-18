// Work 'in-place' in given array. Alter order if needed (stability is not required). Example [1,2,1,3,4,2], could become [1,2,4,3].

function removeAt(arr, index){
    var removed = arr[index];
    for (var i = index; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1;
    return arr;
}

function removeDuplicatesInPlace(arr){
    var list = {};
    var idx = 0;
    var temp = 0;
    while(idx < arr.length){
        if(!list[arr[idx]]){
            list[arr[idx]] = 1;
        }
        else{
            list[arr[idx]]++;
        }
        idx++
    }
   for (var i = 0; i < arr.length; i++){
       if(list[arr[i]] > 1){
           list[arr[i]]--;
           removeAt(arr, i);
       }
   }

    return [arr, list];
}

console.log(removeDuplicatesInPlace([1,2,1,10,3,4,2,10,10]));
