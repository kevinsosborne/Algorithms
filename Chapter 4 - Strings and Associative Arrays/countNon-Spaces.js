// Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29(not 35).

function countNonSpaces(str){
    var strArr = str.split(" ");
    var charStr = strArr.join("");
    return charStr.length;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));