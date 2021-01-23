function reverseArray(arr){
    let revArrIndex = 0, revArr = [],arrLen= arr.length
    
    if(arrLen === 1 || arrLen === 0){
        return arr
    }else{
        for(let i = arrLen-1;i>=0;i--){
            revArr[revArrIndex]= arr[i]
            revArrIndex= revArrIndex + 1
        }
       return revArr
    }
   
   
}

reverseArray([1,4,3,2])