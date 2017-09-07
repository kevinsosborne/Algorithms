// String.split(seperator, limit) - split string into an array of substrings, returning array. Seperator specifies where to divide substrings and is not included in any substring. If "" is specified, split the string on every character. Limit is optional and indicates number of splits; additional post-limit items should be discarded. Note: existing string unaffected.

String.prototype.split = function(seperator, limit){
    var str = this.toString();
    var word = "";
    var arr = [];
    switch(arguments.length){
        case 0:
                arr.push(str);
                console.log(arr);
            break;
        case 1:
            if(seperator == ""){
                for (var x = 0; x < str.length; x++){
                    arr.push(str.charAt(x));
                }
                console.log(arr); 
            };
            if(seperator == " "){
                for (var x = 0; x < str.length; x++){
                    if(str.charAt(x) != " "){
                        word += str.charAt(x);
                    }
                    else if(word.length > 0 && (str[x] == " " || x == str.length -1)){
                        arr.push(word);
                        word = "";
                    }                    
                }
                console.log(arr);
            };
            break;
        case 2:
            if(seperator == ""){
                for (var x = 0; x < limit; x++){
                    arr.push(str.charAt(x));
                }
                console.log(arr); 
            };
            if(seperator == " "){
                for (var x = 0; x < str.length; x++){
                    if(str.charAt(x) != " "){
                        word += str.charAt(x);
                    }
                    else if(word.length > 0 && (str[x] == " " || x == str.length -1)){
                        arr.push(word);
                        word = "";
                    }                    
                }
                arr.length = arr.length - (arr.length - limit);
                console.log(arr);
            };
            break;
    }
}

" Hello World".split();
" Hello World".split("",2);
"   Hello World ".split(" ",1);