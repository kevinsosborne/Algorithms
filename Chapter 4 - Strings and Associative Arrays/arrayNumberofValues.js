// Without using the .length property that is present on all arrays, determine and return the number of values in the given array. If we were to do this on a numerial array, we might check to see wheather the element ata  certain numerical index was undefined. Unfortunately we can't do that here because the keys don't have any sort of predictable order of the first value.

//So, for object { brand: "Travis Shredd & the Good Ol' Homeboys", style: "County/Metal/Rap", album: "668: The Neighbor of the Beast"}, you should return the value 3, because there are three different keys in this object. band, style, and album.

function arrayNumberofValues(obj){
    var count = 0;
    for( i in obj){
        count++;
    }
    return count;
}
console.log(arrayNumberofValues({ brand: "Travis Shredd & the Good Ol' Homeboys", style: "County/Metal/Rap", album: "668: The Neighbor of the Beast"}))
