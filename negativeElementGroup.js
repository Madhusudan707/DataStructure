/* Move all negative numbers to beginning and positive to end with constant extra space */

function negativeElementGroup(arr){
    let arrLen = arr.length
    let negativeArr = []
    let newArr = []

    for(let i =0; i<arrLen;i++){
        if(arr[i]<0){
            negativeArr.push(arr[i])
            arr.splice(i,1)
           i =0
        }
    }
    newArr = negativeArr.concat(arr) 
    //console.log(newArr)
    return newArr
}

negativeElementGroup([-12, 11, -13, -5, 6, -7, 5, -3, -6])

Array.prototype.flush = function() {console.log(this.length = 0);}