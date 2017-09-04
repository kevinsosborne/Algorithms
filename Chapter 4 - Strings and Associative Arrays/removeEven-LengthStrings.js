// Build a standalone function to remove strings of even lengths from a given array. For array containing ["Nope!", "Its", "Kris", "starting", "with", "K!","(instead", "of", "Chris", "with", "C)", "."], change that same array to ["Nope!", "Its", "Chris", "."].


function removeEvenLengthStrings(arr){
    var newarr = [];
    for (var x = 0; x < arr.length; x+=1){
        if(arr[x].length % 2 !== 0){
            newarr.push(arr[x]);
        }
    }
    console.log(newarr);
}

removeEvenLengthStrings(["Nope!", "Its", "Kris", "starting", "with", "K!","(instead", "of", "Chris", "with", "C)", "."]);