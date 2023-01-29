function pangrams(str) {
    // Write your code here
str=str.trim().split(' ').join('')
//console.log(str)
str=str.toLowerCase();
let count=0
let el="abcdefghijklmnopqrstuvwxyz";
 let obj={}; 
for(let char of str){
   obj[char]=obj[char]+1||1
 }
let obj1={};
for(let char of el){
   if(!obj[char]){
     count++
   }
  
}

return(count===0?"pangram":"not pangram")
}