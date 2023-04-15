let arr=[3,2,1,4];


let n=arr.length-1;

let k=2;

let formax=arr.sort((a,b)=>b-a);
let formin=arr.sort((a,b)=>a-b);


let min=0;
let buy=0;

let free=n;

while(buy<=free){
  min+=formin[buy];
  free-=k;
  buy++;
  
}

let max=0;
let buy1=n;
let free1=0;

while(free1<=buy1){
  max+=formax[buy1];
  free1+=k;
  buy1--;
}
console.log(min
        ,max)



