/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
   let stack=[];
   let i=0;
   for(let el of pushed){
       stack.push(el);
       while(stack.length&&stack[stack.length-1]===popped[i]){
           stack.pop();
           i++;
       }
   }
 return pushed.length==i
   
};