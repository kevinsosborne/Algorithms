// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42,"wassup", true], return {"abc": 42, 3:"wassup", "yo": true}.

function zipArraysIntoMaps(arr1, arr2){
    var match = {};
    if(arr1.length == arr2.length){
        for(var x = 0; x < arr1.length; x++){
            match[arr1[x]] = arr2[x];
        }
    }
    console.log(match);
}

zipArraysIntoMaps(["abc", 3, "yo"],[42,"wassup", true]);