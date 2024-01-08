// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
function threeSum(nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return []
        let l = i + 1;
        let r = nums.length - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r + 1]) r--;
                res.push([nums[i], nums[l], nums[r]]);
            } else if (sum < 0) {
                l++
            } else {
                r--
            }

        }
    }
    return res
}
const res = threeSum([-1, 0, 1, 2, -1, -4])
console.log(res)