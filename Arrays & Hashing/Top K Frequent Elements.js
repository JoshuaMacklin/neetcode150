class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        // Creating Frequency Map
        for (const n of nums) {
            freq[n] = (freq[n] || 0) + 1;
        }

        //Turning Frequency map object into array
        const entries = Object.entries(freq);

        // Sorting array by num frequency descending
        entries.sort((a, b) => b[1] - a[1]);

        //Returning the top k frequent elements
        return entries.slice(0, k).map(pair => Number(pair[0]));
    }
}