function Fibonacci_Series(n){
   let arr=[];
  arr[0]=0;
  arr[1]=1;
  if(n==1||n===0){
    return n
  }
 for(let i=2;i<n;i++){
      arr[i]=arr[i-1]+arr[i-2];
   
 }
return arr
  
}

