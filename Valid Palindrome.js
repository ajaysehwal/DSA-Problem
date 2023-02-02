let str="A man, a plan, a canal: Panama";
str=str.toLowerCase();
 str=str.trim().split(' ').join('')
     let patten=/[^A-Za-z0-9]/g;
     
 let ans=str.replace(patten,"");
let res=ans.trim().split('').reverse().join('');
console.log(res===ans)
