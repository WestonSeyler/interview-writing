function maxArea(height) {
    let head = 0
    let tail = height.length - 1
    let max = 0
    while (head < tail) {
        let headVal = height[head];
        let tailVal = height[tail];
        max = Math.max(max, Math.min(headVal, tailVal) * (tail - head))
        if (headVal < tailVal) {
            head++
        } else {
            tail--
        }
    }
    return max
}

const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
console.log(res)

// [1,8,6,2,5,4,8,3,7]