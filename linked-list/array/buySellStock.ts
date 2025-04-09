function maxProfit(prices: number[]): number {
    let high = prices[0]
    let low = prices[0]
    let maxProfit = 0
    prices.forEach((p) => {
        if(p - low > maxProfit){ 
            high = p
            maxProfit = high - low
        }
        if(p < low) {
            low = p
        }
    })
    return maxProfit
};
