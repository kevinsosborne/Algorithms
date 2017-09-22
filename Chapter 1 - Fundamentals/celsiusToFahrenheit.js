// Create celsiusToFahrenheit (cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature express in Fahrenheit degrees.

function celsiusToFahrenheit(cDegree){

    var fDegree = 9/5*(cDegree)+32;
    fDegree = fDegree.toFixed(2);
    console.log(fDegree + " Fahrenheit");
    return fDegree;
}

celsiusToFahrenheit(20);