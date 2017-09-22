// Associate arrays are also called hashes (we'll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {'name': 'Zaphod', 'charm': 'high'}, return {'Zaphod': 'name', 'high':'charm'}.

function invertHash(assocArr){
    var newassocArr = {};
    for (i in assocArr){
        newassocArr[assocArr[i]] = i;
    }
    return newassocArr;
}

console.log(invertHash({'name': 'Zaphod', 'charm': 'high'}));