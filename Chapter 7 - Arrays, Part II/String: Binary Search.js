// You will be given a very long string and a single character. Return whether that character is present in the string. Note: the characters in the string have been arranged so that the charCodeAt() values for each character are monotonically ascending from the beginning of the string to the back. Use the fact that the string is effectively sorted. Don't use built-in functions. Note: characters may not ebe exactly as you might have considered 'alphabetized', but char.charCodeAt() works well. Example: if your function is given the inputs (" &-379DEFXZ[abcz|", "6"), it should return false. If instead it is send (" &-379DEFXZ[abcz|", "c"), return true.

function binarySearchString(str1, str2) {
    var left = 0
    var mid = Math.floor((str1.length)/2);
    var right = str1.length - 1
    // console.log(mid);
    // console.log(str1[mid] < str2);

    while (left <= right) {
        
        if (str1[mid] < str2) {
            console.log("Entering Mid less than String 2");
            left = mid;
        }
        else if (str1[mid] > str2) {
            console.log("Entering Mid is greater than String 2")
            right = mid
        }
        else{
            return [str1[mid], mid, true];
        }
        mid = Math.floor( (right - left)/2) + left
        console.log(mid);
    }
}

console.log(binarySearchString(" &-379DEFXZ[abcz|", "3"));