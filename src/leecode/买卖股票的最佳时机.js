function maxProfit(prices) {
    let min = prices[0]
    let max = 0
    for (let price of prices) {
        min = Math.min(min, price)
        max = Math.max(max, (price - min))
    }
    return max
}

// [7,1,5,3,6,4]