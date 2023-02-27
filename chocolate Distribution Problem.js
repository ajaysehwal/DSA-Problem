
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution{
    findMinDiff(arr,n,m){
        //code here
    
    
arr.sort((a,b)=>a-b);

let min1=Infinity;

let i=0;
let j=m-1;
while(j<n){
    let diff=arr[j]-arr[i];
    min1=Math.min(min1,diff);
    i++;j++;
}
return min1
    }
}