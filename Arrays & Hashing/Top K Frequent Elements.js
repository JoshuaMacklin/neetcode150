class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for (let num of nums) {
            count[num]=(count[num] || 0) + 1;
        }

        let array=Object.entries(count).map(([num, frequency]) => [
            frequency,
            num,
        ]);
        array.sort((a, b) => b[0] - a[0]);

        return array.slice(0, k).map((num) => num[1]);
    }
}