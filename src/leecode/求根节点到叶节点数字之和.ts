// function sumNumbers(root) {
//     // return dfs(root, 0)
//     let res = []
//     function goPath(root, arr) {
//         let temp = [...arr, root.val];
//         if (!root.left && !root.val) {
//             res.push(root.val)
//         }
//         if (root.left) {
//             goPath(root.left, temp)
//         }
//         if (root.right) {
//             goPath(root.right, temp)
//         }

//     }
//     goPath(root, []);

// }
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function sumNumbers(root: TreeNode | null): number {
    return dfs(root, 0)
}
function dfs(root: TreeNode | null, prevSum: number): number {
    if (root === null) return 0

    const sum = prevSum * 10 + root.val

    if (root.left === null && root.right === null) {
        return sum
    } else {
        return dfs(root.left, sum) + dfs(root.right, sum)
    }

}
