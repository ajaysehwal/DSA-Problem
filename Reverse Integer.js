 @param {number} x
 * @return {number}
 */
   const isSigned32bitInteger = (integer) => {
    return (integer > Math.pow(2, 31) * -1) && (integer < Math.pow(2,31) - 1);
};
var reverse = function(x) {
   
    let last=x;
   
    x=Math.abs(x);
    let num=String(x);
    let bag=""
    for(let i=num.length-1;i>=0;i--){
        bag+=num[i];
    }
     let ans=last<0?-bag:bag
        return isSigned32bitInteger(ans)?ans:0
};