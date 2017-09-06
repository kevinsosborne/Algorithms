// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappela fugues. Some of 'those fugueing challenges' are less popular than others, so he needs an index. Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges seperated by a hyphen. For [1,13,14,15,37,38,70], return string "1, 13-15, 37-38,70".

function bookIndex(arr){
    var newarr = [];
    var ftemp;
    var ltemp;
    for(var x = 0; x < arr.length - 1; x++){
        if((arr[x] + 1) != arr[x + 1]){
            ftemp = arr[x];
            ltemp = arr[x + 1];
            newarr.push(ftemp);
            newarr.push(ltemp);
        }
    }
    console.log(newarr);
}

bookIndex([1,13,14,15,37,38,70]);