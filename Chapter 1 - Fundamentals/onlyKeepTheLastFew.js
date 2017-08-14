// Stan learned something today: that directly decrementing an array's .length immediately shortens it by that amount. Given array arr and number x, remove all except the last x elements, and return arr (changed and shorten). Given ([2,4,6,8,10], 3), change the given array to [6,8,10] and return it. 

function onlyKeepTheLastFew(arr, x){
    if(x > arr.length-1){
        console.log("x must be equal to or less than the length of the array");
    }
    else{
        var sliced = arr.slice(arr.length-1-x, arr.length-1);
        console.log(sliced);
        return sliced;
    }
}
onlyKeepTheLastFew([2,4,6,8,10],8);