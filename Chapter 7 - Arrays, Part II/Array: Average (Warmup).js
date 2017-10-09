// (Warm-up) Always run through some quick algorithom problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.

function average(arr){
        if(arr.length > 0){
            var sum = 0;
            for(var i = 0; i < arr.length; i++){
                sum = sum + arr[i];
            }
            var avg = sum / arr.length;
            return avg;
        }
        else{
            return "Array is Empty";
        }
}

var arr = [1,2,3,4,5];
var output = average(arr);
console.log(output);
arr.push(6);
console.log(average(arr));