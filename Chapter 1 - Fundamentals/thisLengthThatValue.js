// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are the same.

function thisLengthThatValue(num1, num2){

    if(num1 == num2){
        console.log("Jinx!");
    }

    var arr = [];
    arr.length = num1;
    for (var i = 0; i < arr.length; i++){
        arr[i] = num2;
    }

    console.log(arr);
}

thisLengthThatValue(2, 2);