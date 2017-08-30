// In JavaScript, the Array object has numerous useful methods. It does not, however, containa a method that will randomize the order of an array's elements. Let's create shuffle(arr), to efficiently shuffle a given array's values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr){
    for (let i = arr.length -1; i >= 0; i--){
        let index = Math.floor(Math.random()*i);
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

console.log(shuffle([1,2,3,4,5,6]));