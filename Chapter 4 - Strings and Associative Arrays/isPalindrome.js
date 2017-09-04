// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuations, and capitalization. If given "Dud" or "oho!", return false.

function isPalindrome(str){
    var arr = str.split("");
    for (var x = 0; x < Math.floor(arr.length / 2); x++){
        if(arr[x] != arr[arr.length - 1 - x]){
            console.log("Error! Not a Palindrome");
            return false;
        }
    }
    console.log("You found a Palindrome");
    return true;
}

isPalindrome("oho!");