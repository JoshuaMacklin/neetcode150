class Solution {
    /**
     * Returns the maximum profit obtainable from a single buy‑sell transaction.
     * @param {number[]} prices - Daily stock prices.
     * @returns {number} Maximum profit (0 if no profitable trade exists).
     */
    maxProfit(prices) {
        // Edge case: no prices or a single price -> no transaction possible.
        if (prices.length == 1) {return 0}

        let maxProfit = 0;
        let minPrice = prices[0];

        for (let price of prices) {
            // Potential profit if we sell today after buying at the cheapest price so far.
            let profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }

            // Update the cheapest buying price seen up to today.
            if (price < minPrice) {
                minPrice = price;
            }
        }

    return maxProfit;
    }
}
