function permute(nums) {
    const res = [];
    const path = [];
    // 
    let k = nums.length
    backtracking(nums, k, [])
    function backtracking(n, k, used) {
        if (path.length === k) {
            res.push(Array.from(path));
            return
        }
        for (let i = 0; i < k; i++) {
            if (used[i]) continue;
            path.push(n[i])
            used[i] = true;
            backtracking(n, k, used)
            path.pop()
            used[i] = false
        }
    }
    return res
}

const res = permute([1, 2, 3])
console.log(res)