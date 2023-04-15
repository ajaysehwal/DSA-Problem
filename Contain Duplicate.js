var containsDuplicate = function(nums) {
     let obj={};
     for(let char of nums){
         obj[char]=obj[char]+1||1
     }
     console.log(obj);
      let flag=false
     for(let key in obj){
           if(obj[key]>=2){
             flag=true
           
           }
     }
     return flag
};