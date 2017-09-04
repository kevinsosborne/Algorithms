// Create a funciton that, given a string, returns the string's acronym (first letters only, captilized). Given " there's no free lunch - gotta pay yer way. ", return "TNEF-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(str){
    var strArray = str.split(" ");
    var acro = "";
    for (var i = 0; i < strArray.length; i++){
        acro += strArray[i].charAt(0);
    }
    var Acro = acro.toUpperCase();
    return Acro;
}

acronym("Live from New York, it's Saturday Night!");