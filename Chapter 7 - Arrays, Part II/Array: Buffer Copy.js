// Create arrBufferCopy(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals) to copy numVals values starting at sourceArr[sourceStartIdx] to destArr[destStartIdx] etc. DO not lengthen destArr, nor read off the end of sourceArr.

function arrBufferCopy(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals){
    for(sourceStartIdx; sourceStartIdx < sourceArr.length; sourceStartIdx++){
        numVals = sourceArr[sourceStartIdx];
        destArr[destStartIdx] = numVals;
        destStartIdx++;
    }
    return destArr;
}

console.log(arrBufferCopy([1,2,3,4,5],[],0,5,0));