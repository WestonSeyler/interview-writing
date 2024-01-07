// nums = [-1,0,3,5,9,12], target = 9
var search = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return -1
};
const res = search([-1,0,3,5,9,12], 2)
console.log(res)