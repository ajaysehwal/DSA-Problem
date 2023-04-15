// find Integer which present only onces in Array

function lonelyinteger(a) {
    // Write your code here
    let obj={};
     for(let i=0;i<a.length;i++){
         obj[a[i]]=obj[a[i]]+1||1
     }
     //console.log(obj)
      for(let key in obj){
          if(obj[key]===1){
              return Number(key)
          }
      }
}
