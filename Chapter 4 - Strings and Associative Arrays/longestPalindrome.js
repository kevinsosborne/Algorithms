// For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. Given "what's up, daddy-o?", return "dad". Given "uh...not much", return "u". Included spaces as well. 

function isPalindrome(str){
    var arr = str.split("");
    for (var x = 0; x < Math.floor(arr.length / 2); x++){
        if(arr[x] != arr[arr.length - 1 - x]){
            return false;
        }
    }
    return true;
}

function longestPalindrome(string){
    var arr = [];
    if(isPalindrome(string)){
        return string;
    }
    for(var idx = 0; idx < string.length - 1; idx++){
        var pal = string[idx];
        var letter = string[idx];
        for (var x = idx + 1; x < string.length; x++){
            pal += string[x];
            if(letter == string[x]){
                if(isPalindrome(pal)){
                    arr.push(pal);
                }
            }
        }
    }
    console.log(arr);
    if(arr.length < 1){
        return arr[0];
    }
    else{
        var longest = arr[0];
        for(var n = 1; n < arr.length; n++){
            if(arr[n].length > longest.length){
                longest = arr[n];
            }
        }
    }
    console.log(longest);
}

longestPalindrome("what's up, daddy-o?");