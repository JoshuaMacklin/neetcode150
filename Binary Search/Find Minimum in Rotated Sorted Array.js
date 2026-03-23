class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let minFound = nums[0]
        let l = 0
        let r = nums.length-1

        while (l <= r){
            if (nums[l] <= nums[r] ) {
                minFound = Math.min(minFound, nums[l])
                break
            }

            let middle = l + Math.floor((r-l) /2)
            minFound = Math.min(minFound, nums[middle])
            // if (nums[middle] < nums[l] && nums[middle] < nums[r]){return nums[middle]}
            if (nums[middle] >= nums[l]){
                //search right
                l = middle + 1
            } else {
                r = middle - 1
                //search left
            }

        }
        return minFound 
    }
}
