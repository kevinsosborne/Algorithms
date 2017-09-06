// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappela fugues. Some of 'those fugueing challenges' are less popular than others, so he needs an index. Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges seperated by a hyphen. For [1,13,14,15,37,38,70], return string "1, 13-15, 37-38,70".

function bookIndex(arr){
    var ind = 0;
    var strArr = [];
    var numRange = [];
   while(ind < arr.length){
    console.log(strArr);
    if(arr[ind + 1] != arr[ind] + 1){
        if(numRange.length == 0){
            strArr.push(arr[ind]);
        }
        else{
            strArr.push(numRange[0] + "-" + numRange[numRange.length -1])
            numRange = [];
        }
    }
    else{
        numRange.push(arr[ind]);
        numRange.push(arr[ind + 1]);
        // console.log(numRange);
        
    }
    ind++;
   }
   return strArr.join(", ");
    
}

console.log(bookIndex([1,13,14,15,16,37,38,70]));