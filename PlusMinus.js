let arr=[1,1,-1,0,-1];

function plusMinus(arr) {
//* Write your code here.
  let x=0;
  let y=0;
  let z=0;
  let l=arr.length
  for(let i=0;i<arr.length;i++){
      if(arr[i]>0){
          x++;
      }else if(arr[i]<0){
          y++;
      }else{
          z++;
      }
  }
  console.log(x/l);
  console.log(y/l);
 console.log(z/l);  
  }