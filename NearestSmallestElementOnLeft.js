let  arr=[1,2,4,6,9,3,8,1];

function NearestGreaterElementOnLeft(arr){
  let stack=[];
  let res=new Array(arr.length);
  res[0]=-1;
  stack.push(0);
  for(let i=0;i<arr.length;i++){
     while(stack.length!==0&&arr[stack[stack.length-1]]>arr[i]){
       stack.pop();
     }
    res[i]=!stack.length===0?arr[stack[stack.length-1]]:-1
    stack.push(i);
  }
  return res
}
console.log(NearestGreaterElementOnLeft(arr))