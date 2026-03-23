class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1, res = -1

        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            // Found the target
            if (nums[m] === target) {
                return m;
            }

            // Check if the left half is sorted
            if (nums[l] <= nums[m]) {
                // If target is within the sorted left half
                if (target >= nums[l] && target < nums[m]) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            } else { // Otherwise, the right half must be sorted
                // If target is within the sorted right half
                if (target > nums[m] && target <= nums[r]) {
                    l = m + 1
                } else {
                    r = m - 1
                }
            }
        }

        return res;
    }
}