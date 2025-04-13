function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	// compare left and rights, based on all
    if(
        (p.val < root.val && q.val > root.val) || 
        (p.val > root.val && q.val < root.val) || 
        (p.val == root.val) || 
        (q.val == root.val)){
        return root
    }
    
    if(root.left && (p.val < root.val && q.val < root.val)){
        return lowestCommonAncestor(root.left, p, q,)
    }
    if(root.right && (p.val > root.val && q.val > root.val)){
        return lowestCommonAncestor(root.right, p, q)
    }
    
};
