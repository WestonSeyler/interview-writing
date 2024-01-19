/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const used = [];
    const res = []

    function dfs(path) {
        if (path.length === nums.length) {
            res.push(path.slice());
        }
        //[1,2,3]
        for (const num of nums) {
            if (used[num]) continue
            path.push(num);
            used[num] = true;
            dfs(path);[]
            path.pop()
            used[num] = false
        }
    }
    dfs([])
    return res
};

const res = permute([1, 2, 3])
console.log(res)