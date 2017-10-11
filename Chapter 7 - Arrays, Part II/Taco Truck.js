// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x, y] coordinates corresponding to locations of his customers. They walk to this truck, but he is a fair-minded so he wants to minimize total distance from truck to customers. City blocks are perfect squares. and every street is two-way, at perfect right angels. He only parks by street corners (cordinates like [37, -16]). Customers only travel on streets: coordinate [2, -2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location Example: given [[10,0], [-1,10], [2,4]], return [2,0], as total distance is 25 (8+13+4).

function TacoTruck(arr){
    var truck = [0,0];
    var move = [0,0];
    var totalDistance = 0;
    // The corners of my grid I am evaluating
    var leftx = 0;
    var rightx = 0;
    var topy = 0;
    var bottomy = 0;
    for(var i = 0; i < arr.length; i++){
        for(var idx = 0; idx < arr[i].length; idx++){
            totalDistance += Math.abs(arr[i][idx]);
            if(idx == 0 && arr[i][idx] < leftx){
                leftx = arr[i][idx]
            }
            if(idx == 0 && arr[i][idx] > rightx){
                rightx = arr[i][idx]
            }
            if(idx == 1 && arr[i][idx] > topy){
                topy = arr[i][idx]
            }
            if(idx == 1 && arr[i][idx] < bottomy){
                bottomy = arr[i][idx]
            }
        }
    }
    var tempDistance = 0;
    var optimalx = 0;
    for(var x = leftx; x <= (Math.abs(rightx)); x++){
        move[0] = x;
        for(var i = 0; i < arr.length; i++){
                tempDistance += (Math.abs(arr[i][0] - move[0]) + Math.abs(arr[i][1] - move[1]));
                // console.log("Element " + i + " has a distance of " + (Math.abs(arr[i][0] - move[0]) + Math.abs(arr[i][1] - move[1])));
                // console.log("Element " + i + " has an x distance of " + Math.abs(arr[i][0] - move[0]));
                // console.log("Element " + i + " has an arr of i x coordinate of " + arr[i][0])
                }
                // console.log(tempDistance, move);
        if(tempDistance < totalDistance){
            totalDistance = tempDistance;
            optimalx = x;
        }
        tempDistance = 0;
            
    }
    move[0] = optimalx;
    
    var optimaly = 0;
    for(var y = bottomy; y <= (Math.abs(topy)); y++){
        move[1] = y;
        for(var i = 0; i < arr.length; i++){
                tempDistance += (Math.abs(arr[i][0] - move[0]) + Math.abs(arr[i][1] - move[1]));
                // console.log("Element " + i + " has a distance of " + (Math.abs(arr[i][0] - move[0]) + Math.abs(arr[i][1] - move[1])));
                // console.log("Element " + i + " has an x distance of " + Math.abs(arr[i][0] - move[0]))
                }
                // console.log(tempDistance, move);
        if(tempDistance < totalDistance){
            totalDistance = tempDistance;
            optimaly = y;
        }
        tempDistance = 0;
    }
    move[1] = optimaly;
return move;        
}

var arr = [[-1,10], [2,4],[10,0]];
console.log(TacoTruck(arr));