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
 * @return {number[]}
 */
var preorderTraversal = function(root,arr=[]) {
    add(root)
    function add(node){
            if(!node)return 
  arr.push(node.val)
            add(node.left);
            add(node.right);
    }
      return arr

};