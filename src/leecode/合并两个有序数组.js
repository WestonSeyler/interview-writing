function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 || j >= 0) {
        if (i < 0) {
            nums1[k--] = nums2[j--]
        } else if (j < 0) {
            nums1[k--] = nums1[i--];
        } else if (nums1[i] < nums2[j]) {
            nums1[k--] = nums2[j--]
        } else {
            nums1[k--] = nums1[i--]
        }
    }
    return nums1
}

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3?
const res = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
console.log(res)