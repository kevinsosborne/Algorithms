// Create arrBufferCopy(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals) to copy numVals values starting at sourceArr[sourceStartIdx] to destArr[destStartIdx] etc. DO not lengthen destArr, nor read off the end of sourceArr.

function arrBufferCopy(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals){
    var i = sourceStartIdx;
    var count = 1;
    while(count <= numVals){   
            

        if(i == sourceArr.length){
            console.log("Entering If");
            console.log(" i " + i + " source Arr " + sourceArr[i]);            
            i = 0;
            
            if(destStartIdx == destArr.length){
                destStartIdx = 0;
                // console.log("source Arr" + sourceArr[i] + " i " + i);
                
                destArr[destStartIdx] = sourceArr[i];            
            }
            else{
                // console.log("source Arr" + sourceArr[i] + " i " + i);
                
                destArr[destStartIdx] = sourceArr[i];            
                destStartIdx++;
            }
            i++;
        }    
        else{
            console.log("Entering Else");
            console.log(" i " + i + " source Arr " + sourceArr[i]);
            
            if(destStartIdx == destArr.length){
                destStartIdx = 0;
                destArr[destStartIdx] = sourceArr[i];            
            }
            else{
                destArr[destStartIdx] = sourceArr[i];            
                destStartIdx++;
            }
            i++;
        }
        count++;
    }


    return destArr;
}

console.log(arrBufferCopy([9,8,7,6,5,4,3,2,1],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"],8,12,10));