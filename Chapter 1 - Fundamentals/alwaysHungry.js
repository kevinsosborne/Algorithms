// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "i'm hungry" once.

function alwaysHungry(arr){
    var count = 0;
    var i = 0;
    while (i < arr.length){
        if(arr[i] == "food"){
            console.log("yummy");
            count++;
        }
        i++;
    }
    if(count == 0){
        console.log("I'm Hungry");
    }
}

alwaysHungry([2, 4]);