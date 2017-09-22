// String.search(val) - search string for the given val (another string). Return the index position of the first match found(or -1 if not found).

String.prototype.search = function(val){
    var str = this.toString();
    var strArr = str.split("");
    var temp;
    var count = 0;
    for (var x = 0; x < strArr.length; x++){
        if(strArr[x] == val[count]){
            count++;
        }
        if(strArr[x] == val[0]){
            console.log(x);
            temp = x;
        }
        if(count == val.length){
            return temp;
        }
    }
}

console.log("My trip to Antartica".search("trip"));