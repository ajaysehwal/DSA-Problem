var threeSumClosest = function(num, t) {
     let sorted=num.sort((a,b)=>a-b);
   
 let res=[]
 let min=Infinity;
for(let i=0;i<sorted.length-2;i++){
  if(i>0&&sorted[i]===sorted[i-1])continue;
  let j=i+1;
  let k=sorted.length-1;
  let sum=0;
  while(j<k){

    sum=(sorted[i]+sorted[j]+sorted[k]);
     if(sum==t){
         return t;
     }

         min=Math.abs(t-min)<Math.abs(t-sum)?min:sum;
      
   if(sum<t){
       j++;
       while(j<k&&sorted[i]===sorted[i-1])j++;
   }else{
       k--
    while(j<k&&sorted[k]===sorted[k+1])k--;

   }
  }
}
return (min)
};