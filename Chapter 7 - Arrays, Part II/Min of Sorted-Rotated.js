// You will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. Don't use built-in functions. Given the input array ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"], return "Anna". 

function minOfSortedRotated(arr) {
    var left = 0
    var mid = Math.floor((arr.length)/2)
    console.log(arr[mid]);
    console.log((arr.length)/2);
    var right = arr.length - 1

    while (mid != left) {
        
        if (arr[mid] > arr[right]) {
            console.log(arr[mid] + " " + arr[right]);
            left = mid
        }
        else if (arr[left] > arr[mid]) {
            right = mid
        }
        mid = Math.floor( (right - left)/2) + left
    }

    if (arr[mid] <= arr[right]) {
        return arr[mid]
    }
    else {
        return arr[right]
    }
}

console.log( minOfSortedRotated(['Gigli','Jay is cool','Mavis','Phoebe','Thurber','Anna','Celeste',"Elon"]) )

var g = 'Gigli';
var j = 'Jay is cool';
console.log(g < j);