// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array's zero'th element) down to 0 (as the last element). How long is this array?

function countDown(num){
    arr = [];
    while(num != -1){
        arr.push(num);
        num--;
    }
    console.log(arr.length);
    return arr.length;
}

countDown(10);