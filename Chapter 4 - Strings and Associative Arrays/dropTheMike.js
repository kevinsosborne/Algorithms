// Create a standalone function that accepts an input string, removes leading and trailing white space (at beginning and end only), capitalizes the first letter of every word, and returns that string. If original string contains the word "Mike" anywhere, immediately return "stunned silence" instead.

function dropTheMike(str){
    const strArr = str.split(" ");
    let newStr = [];
    for (var x = 0; x < strArr.length; x++){
        if(strArr[x] == 'Mike'){
            return "stunned silence"
        }
        if(strArr[x] != ''){
        newStr.push(strArr[x][0].toUpperCase() + strArr[x].substring(1));
        }
    }
    return newStr.join(" ");        
}

console.log(dropTheMike("  hello kevin"));