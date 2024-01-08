function levelOrder(root) {
    const res = []
    if (!root) return []
    dfs(root, 0, res)
    return res
}
function dfs(root, res) {
    if (root) {
        if (!res.step) res[step] = []
        res[step].push(root.val)
        dfs(root.left, step + 1, res)
        dfs(root.right, step + 1, res)
    }
}