// Lance is writing his opus: Epitome, an epic tome of beat poetry. Always ready for a good ryhme, he constantly seeks words that end with the same letters. Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array. For inputs ["deforestation", "citation", "convinction", "incarceration"', return "tion" (not all that creative rhyming point). If it is ["nice", "ice", "baby"], return "", because that's just...not.

function commonSuffix(arr){
    var sufArr = [];
    for(var x = arr.length - 1; x >= 0; x--){
        for (idx = arr.length - 2; idx >= 0; idx--){
            if(arr[x].charAt(arr[x].length -1 - x) != arr[idx].charAt(arr[idx].length -1 - x)){
                return sufArr;
            }
        }
        sufArr.push(arr[x].charAt(arr[x].length -1 - x));
    }
    var common = sufArr.join("");
    return common;   
}


console.log(commonSuffix(["deforestation", "citation", "convinction", "incarceration"]));
