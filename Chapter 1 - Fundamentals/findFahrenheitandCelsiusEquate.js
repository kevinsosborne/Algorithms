

function findFahrenheitandCelsiusEquate(cDegree){
    
    while(true){
        if(celsiusToFahrenheitMatch(cDegree) === true){
            break;
        }
        else{
            cDegree--;
        }
    }
}

function celsiusToFahrenheitMatch(cDegree){

    var fDegree = 9/5*(cDegree)+32;
    fDegree = fDegree.toFixed(2);
    if(fDegree == cDegree){
        console.log(fDegree + " Fahrenheit; " + cDegree + "Celsius");
        return true;
    }
    console.log(cDegree);
    return cDegree;
}

findFahrenheitandCelsiusEquate(50);