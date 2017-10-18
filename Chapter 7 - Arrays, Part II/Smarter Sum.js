// Use time-space tradeoff to accelerate average running time for iSigma(num) that returns sum of intergers from 1 to num. Recall iSigma(1) = 1, iSigma)2 = 3, iSigma(3) = 6.


class Sigma{
    constructor(){
        this.numList = {};
    }
    iSigma(num){
        if(!this.numList[num]){
            var i = 1;
            var count = 0;
            var countDown = num;
            while(countDown >= i){
                count = count + countDown
                countDown--;
            }
            this.numList[num] = count;
            return [this.numList[num], this.numList,"New"];
        }
        else{
            return [this.numList[num], this.numList,"Existing"];
        }
    }
}

function SuccessFunction() {
    console.log(milliSeconds);
}

var s = new Sigma();
console.log(s.iSigma(3));
console.log(s.iSigma(5));


// var milliSeconds = new Date().getMilliseconds();
console.log(s.iSigma(20));
// SuccessFunction();

var milliSeconds = new Date().getMilliseconds();
console.log(s.iSigma(20));
SuccessFunction();



