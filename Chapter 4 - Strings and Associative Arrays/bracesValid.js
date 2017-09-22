// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e({r}e]!" => true.

function bracesValid(str){
    var count = 0;
    var last = [];
    for (var x = 0; x < str.length; x++){
        if(str.charAt(x) == "[" || str.charAt(x) == "{" || str.charAt(x) == "("){
            console.log(str.charAt(x));
            count++;
            last.push(str.charAt(x));
        }
        if(str.charAt(x) == "]"){
            if(last[last.length - 1] == "["){
                count --;
                last.pop();
            }
            else{
                return false;
            }
        }
        if(str.charAt(x) == "}"){
            if(last[last.length - 1] == "{"){
                count --;
                last.pop();
            }
            else{
                return false;
            }
        }
        if(str.charAt(x) == ")"){
            if(last[last.length - 1] == "("){
                count --;
                last.pop();
            }
            else{
                return false;
            }
        }
    }
    console.log(count);
    if(count == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(bracesValid("D(i{a}l[ t]o)n{e"));
