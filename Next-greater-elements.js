
let arr=[1,3,2,4];
//otp [3 4 4 -1]


let stack=[];
let res=[];


for(let i=arr.length-1;i>=0;i--){
  while(stack.length!==0&&stack[stack.length-1]<arr[i]){
    stack.pop();
  }
    if(stack.length===0){
    res.push(-1);
  }else{
    res.push(stack[stack.length-1]);
         
  }
  stack.push(arr[i]);
  
}

console.log(res.reverse())
