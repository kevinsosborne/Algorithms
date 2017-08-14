// Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"; if the value is [0] is less than array's length, print "Too small!"; otherwise print "Just right!"

function fitTheFirstValue(arr){

    switch(true){
        case (arr[0] > arr.length):
            console.log("Too big!")
            break;
        case (arr[0] < arr.length):
            console.log("Too small!")
            break;
        case (arr[0] == arr.length):
            console.log("Just right!")
            break;
    }
}

fitTheFirstValue([2, 100]);