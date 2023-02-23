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
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
    if(root==null) return root;

    let maxdia=0;
    const dfs=(node)=>{
        if(node===null)return node;

        let left=dfs(node.left);
        let right=dfs(node.right);
        maxdia=Math.max(maxdia,left+right);
        return Math.max(left,right)+1;

    }
       dfs(root);

 return maxdia
}
