//implementing queuesi in Stack
let s1=[];
let s2=[];
function e(x){
  s1.push(x);
}

e(1);
e(2);
e(4)
console.log(s1)
function de(){
 if(s1.length!==0){
   if(s2.length!==0){
     return "empty";
   }else{
   while(s1.length!==0){
     let temp=s1.pop();
     s2.push(temp);
   }
 }
 }

 return s2.pop()
};
console.log(de())
	