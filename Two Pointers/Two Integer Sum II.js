class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // neetcode's twin pointers solution (learned)
        let l = 0
        let r = numbers.length - 1
        while (l < r) {
            let curSum = numbers[l] + numbers[r]
            if (curSum > target) {
                r--;
            } else if (curSum < target) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }
        return [];
    }
}

