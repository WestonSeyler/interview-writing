/**
 * 解法一：快速排序
 * 思路：
 * （1）快速排序的主要思想是通过划分将待排序的序列分成前后两部分，其中前一部分的数据都比后一部分的数据要小，
 * （2）然后再递归调用函数对两部分的序列分别进行快速排序，以此使整个序列达到有序。
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(h)，其中 h 为快速排序递归调用的层数。我们需要额外的 O(h) 的递归调用的栈空间，
 * 由于划分的结果不同导致了快速排序递归调用的层数也会不同，最坏情况下需 O(n) 的空间，最优情况下每次都平衡，
 * 此时整个递归树高度为 logn，空间复杂度为 O(logn)。
 */
function sortArray(nums) {
    const len = nums.length;
    if (len === 0) return nums
    const mid = Math.floor(nums.length / 2)
    const midVale = nums.splice(mid, 1)[0]
    const left = []
    const right = []
    //[1,1,2,0,0]
    //[1,1,0,0]
    //[2]
    //[5]
    // console.log(midVale)
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (n < midVale) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return sortArray(left).concat([midVale], sortArray(right))


}
const res = sortArray([5, 1, 1, 2, 0, 0])
console.log(res)
// [5,1,1,2,0,0]