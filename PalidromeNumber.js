var isPalindrome = function(x) {
     let num=String(x);
     let ans=''
     for(let i=num.length-1;i>=0;i--){
        ans+=num[i];
     }
     return Number(ans)===x
};