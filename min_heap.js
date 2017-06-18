//min heaps are useful when you need to remove the object with the highest priorty

//remove min heap

//my arr
var arr = ['Heap', 1,5,8,6,9,10,12,14,11,12,20,15]

//removeHeap function
function removeHeap(arr)
{
    //Quick fall check
    if(!arr[1])
    {
        return;
    }
    //store the min value in temp
    let temp = arr[1];
    //set the index 1 value to the last value in the array
    arr[1] = arr[arr.length -1];
    //use splice to shorten the length of array by one element
    arr.splice(-1,1)  // splice(start, deleteCount) to reset the array
    //set my index to one since heaps first element is a string
    let index = 1;
    //as long as my parent is greater than child1 or child 2, the algrithom will run this while loop
    while(arr[index] > arr[index*2] || arr[index] > arr[index*2+1])
    {
        //set smaller that will be used as the index of the smaller child
        let smaller;
        //set newtemp that will always be set to the parent
        var newtemp = arr[index];

        //if child1 is greater than or equal to child2
        if(arr[index*2] >= arr[index*2+1])
        {
            //then set child2 index to the variable smaller
            smaller = index*2+1
            //swap
            //parent is set to the smaller child
            arr[index] = arr[smaller];
            //smaller child is set to the parent
            arr[smaller] = newtemp;
            //the index is reset to the index of the child2
            index = index * 2 + 1;

        }
        else
        {
            //if child2 is greater than or equal to child1
            //then set smaller to child1 index
            smaller = index*2
            //swap
            //parent is set to child1
            arr[index] = arr[smaller];
            //child1 is set to the parent
            arr[smaller] = newtemp;
            //the index is reset to the index of the child1
            index = index * 2;


        }
        
    }
    console.log(arr);
    console.log(temp);
    //return the original min value of the heap and the reset array
    return temp, arr;

}

//invoke the remove heap function
removeHeap(arr);
