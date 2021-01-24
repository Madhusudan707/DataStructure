/*
Maximum and minimum of an array using minimum number of comparisons

*/

function minMaxArray(arr){
    let arr_len = arr.length
    let min = arr[0]
    let max = arr[0]
    if(arr_len===1){
        console.log(min,max)
        
    }else{
        for(let i = 1; i<arr_len;i++){
            if(arr[i]<min){
                min = arr[i]
            }
    
            if(arr[i]>max){
                max = arr[i]
            }
        }
        console.log(min)
        console.log(max)
    }
  
    
    
}

minMaxArray([5])