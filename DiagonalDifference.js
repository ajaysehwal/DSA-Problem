/// Find Difference b/w Both diagonal

function diagonalDifference(arr) {
    // Write your code here
    let l=arr.length;
    let left=0;
    let right=0
    for(let i=0;i<l;i++){
        for(let j=0;j<l;j++){
            if(i===j){
                left+=arr[i][j];
            }
            if(i+j===l-1){
                right+=arr[i][j]
            }
        }
    }
    
     return Math.abs(left-right)
}

