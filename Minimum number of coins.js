/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp=Array(amount+1).fill(Infinity);

    dp[0]=0;
    console.log(dp);
    for(let el of coins){
        for(let j=el;j<=amount;j++){
            dp[j]=Math.min(dp[j],dp[j-el]+1);
            console
        }
    }
     
     return dp[amount]==Infinity?-1:dp[amount]
};

