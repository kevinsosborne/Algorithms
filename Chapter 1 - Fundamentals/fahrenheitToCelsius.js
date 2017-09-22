// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegree) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9.5 * Celsius) + 32.

function fahrenheitToCelsius(fDegree){

    var cDegree = 5/9*(fDegree-32);
    cDegree = cDegree.toFixed(2);
    console.log(cDegree + " Celsius");
    return cDegree;
}

fahrenheitToCelsius(75);