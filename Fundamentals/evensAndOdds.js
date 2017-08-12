// Create a function that accepts an array. Every time that array has three odd values in a row, print "That is odd!". Every time the array has three evens in a row, print "Even more so!".

function evensAndOdds(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] && arr[i+1] && arr[i+2]){
            if(arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0 ) { 
                console.log("Even more so!");
                }
            if(arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] != 0){
                console.log("That's odd!");
                }
        }
    }
}

evensAndOdds([2,2,2,3,3,3]);