function miniMaxSum(arr) {
    // Write your code here
    let min=Infinity;
    let max=-Infinity;
 for(let i=0;i<arr.length;i++){
  let sum=0;
  for(let j=0;j<arr.length;j++){
    if(i!=j){
  sum+=arr[j];
    }
  }
    if(min>sum){
        min=sum;
    }
    if(max<sum){
        max=sum
    }
}
console.log(min,max)
}
