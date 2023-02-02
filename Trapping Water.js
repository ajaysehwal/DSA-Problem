let arr = [0,1,0,2,1,0,1,3,2,1,2,1];

let max=0;
let left=[arr.length];
 for(let i=0;i<arr.length;i++){
   if(arr[i]>max){
     max=arr[i];
   }
   left[i]=max
 }
let right=[arr.length];
let max1=0;

for(let i=arr.length-1;i>=0;i--){
  if(arr[i]>max1){
    max1=arr[i];
  }
  right[i]=max1
}
let trap=0
for(let i=0;i<arr.length;i++){
trap+=(Math.min(left[i],right[i])-arr[i])
}
console.log(trap)