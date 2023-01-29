//Mars Exploration

let str='SOSSPSSQSSOR';
let sosCount=str.length/3
let original = "SOS".repeat(sosCount);
let count=0
for(let i=0;i<str.length;i++){
  if(str[i]!=original[i]){
    count++
  }
}
console.log(count)