/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
       let hello=function(node){
    if(node==null)return true;

   let l=1+hello(node.left);
   let r=1+hello(node.right);
      if(Math.abs(l-r)>1)return Infinity
   
     return Math.max(l,r)
    }
    return hello(root)===Infinity?false:true
};
