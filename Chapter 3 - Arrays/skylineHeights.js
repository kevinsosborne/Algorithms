// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let's say youa are given an array with heights of consecutive buildings, starting closest to you and extensing away. Array [-1, 7,3] would represent three buildings, first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4], return [4]. As always with challenges, do not use built-in array functions such as unshift().

function skylineHeights(arr){
    var max = 0;
    newarr = []
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            newarr[newarr.length] = max;
        }
        
    }
    console.log(newarr);
}

skylineHeights([-1,1,1,7,3,10]);