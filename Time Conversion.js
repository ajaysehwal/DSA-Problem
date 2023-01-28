function timeConversion(s) {
    // Write your code here
           s=s.trim().split(':');
         
       if(s[2].includes("AM")){
            let time=Number(s[0]);
   let res="";
   if(time==12){
       res="00"
   }else if(time<12){
       res="0"+time
   }
   return String((res.length==1?"0"+res:res)+":"+s[1]+":"+s[2][0]+s[2][1])  
       }
       //console.log(s)
       if(s[2].includes("PM")){
       let time=Number(s[0]);
   let res=time<12?time+12:time;
   return String((res.length==1?"0"+res:res)+":"+s[1]+":"+s[2][0]+s[2][1])  
       }   
}