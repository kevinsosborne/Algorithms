// Create a function, that given an input string str, returns a boolean wheather parentheses in str area valid. Valid sets of parantheses always open befor they close, for example. For "Y(3(P)p(3)r)s", return true. 

function parensValid(str){
    var list = {
        open: 0,
        close: 0
    };
    for(var x = 0; x < str.length; x++){
        if(str.charAt(x) == ")" && list.open == list.close){
            console.log("Error. There is no opening paren for the closing paren");
            return;
        }
        if(str.charAt(x) == "("){
            list.open ++;
        }
        if(str.charAt(x) == ")"){
            list.close ++;
        }
    }
    if(list.open > list.close){
        console.log("Error. There is more opening paren than closing paren");
        return;
    }
    console.log(list);
}

parensValid("( ())())");