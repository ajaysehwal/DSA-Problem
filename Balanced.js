//Balanced

function balstring(str){
   let stack=[];
   for(let i=0;i<str.length;i++){
      let char=str[i];
     if(char==="{"||char==="("||char==="["){
         stack.push(char);
     }else{
       if(stack.length===0){
         return false;
       }
       let top=stack.pop();
       if(char=="}"&&(top===")"||top==="]")){
         return false;
       }else if(char===")"&&(top==="}"&&top==="]")){
         return false;
       }else if(char==="]"&&(top===")"||top==="}")){
         return false;
       }
     }
   }
   return stack.length===0;
 }
let str="{}(){{}}[[[]]]";
console.log(balstring(str))