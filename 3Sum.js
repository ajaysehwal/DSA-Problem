var threeSum = function(num) {
  if(num.length===0){
      return num
  }
let res=[]
let sorted= num.sort((a,b)=>a-b);
for(let i=0;i<num.length;i++){
  if(i>0&&sorted[i]===sorted[i-1])continue;
    let j=i+1;
    let k=num.length-1;
    let sum=0
    while(j<k){
        sum=sorted[i]+sorted[j]+sorted[k];
        if(sum===0){
            res.push([sorted[i],sorted[j],sorted[k]])
          j++;
          k--;
          while(j<k&&sorted[j]===sorted[j-1])j++;
          while(j<k&&sorted[k]===sorted[k+1])k--;
        }else if(sum>0){
          k--;
        }else {
            j++;
        }
    }
}

  return (res)

}