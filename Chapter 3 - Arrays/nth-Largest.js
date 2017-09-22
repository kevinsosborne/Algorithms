// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

function insertAt(arr, index, value){
    for (var x = arr.length - 1; x >= index; x--){
        arr[x + 1] = arr[x];
    }
    arr[index] = value;
}

function nthLargest(arr, n){
    if(arr.length < n){
        return null;
    }
    var seenSoFar = [arr[0]];
    for(var i = 1; i < arr.length; i++){
        for(var y = 0; y < seenSoFar.length; y++){
            if(arr[i] > seenSoFar[y]){
                insertAt(seenSoFar, y, arr[i]);
                console.log(seenSoFar);
                break;
            }
        }
    }
    return seenSoFar[n - 1];
}

console.log(nthLargest([70,80,40,90,100,94], 4));