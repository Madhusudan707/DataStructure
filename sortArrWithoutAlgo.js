/*
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
Example 2:

Input: 
N = 3
arr[] = {0 1 0}
Output:
0 0 1
Explanation:
0s 1s and 2s are segregated 
into ascending order.

Your Task:
You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)


Constraints:
1 <= N <= 10^5
0 <= A[i] <= 2


*/

function sortArrwitouthAlgo(arr){
    let arrLen = arr.length
    let zeroArr=[],oneArr=[],twoArr=[]
    let zeroOneTwoSortedArr = []
    console.log(typeof(arr[0]))
    for(let i = 0 ; i<arrLen; i++){
        x= arr[i]
        switch(x){
            case 0:
                zeroArr.push(arr[i])
                break;
            case 1:
                oneArr.push(arr[i])
                break;
            case 2:
                twoArr.push(arr[i])
                break;
        }
        
    }
    ///console.log(zeroArr)
   return zeroOneTwoSortedArr = [...zeroArr,...oneArr,...twoArr]
}

console.log(sortArrwitouthAlgo([0,2,1,2,0]))