// You will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. Don't use built-in functions. Given the input array ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"], return "Anna". 

function binarySearchMin(array){
   var alphabet = {
       a: 1,
       b: 2,
       c: 3,
       d: 4,
       e: 5,
       f: 6,
       g: 7,
       h: 8,
       9: i,
       10: j,
       11: k,
       12: l,
       13: m,
       14: n,
       15: o,
       16: p,
       17: q,
       18: r,
       19: s,
       20: t,
       21: u,
       22: v,
       23: w,
       24: x,
       25: y,
       26: z
   }
   var first = 0;
   var last = array.length -1;
   var mid = (first + last)/2;
   while(first <= last){  
    if(array[mid].charCodeAt(0) == "A"){
            return array[mid];
        }
    if(array[mid].charCodeAt(0) != "A"){

        }
   }

}

var arr = ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"];
console.log(arr.sort());