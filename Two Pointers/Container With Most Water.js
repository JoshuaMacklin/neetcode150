class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // neetcode's brute force solution (learned)
        let max = 0;
        for (let i=0; i < heights.length; i++) {
            for (let j=i+1; j<heights.length; j++) {
                max = Math.max(max, Math.min(heights[i], heights[j]) * (j - i))
            }
        }
        return max
    }
}