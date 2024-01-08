// root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
function hasPathSum(root, targetSum) {
    if (!root) return false
    let res = false
    function dfs(root, s) {
        if (!root.left && !root.right && root.val === targetSum) {
            return true
        }
        if (n.left) {
            dfs(root, s + n.left.val)
        }
        if (n.right) {
            dfs(root, s + n.right.val)
        }

    }
    dfs(root, root.val)
    return res
}