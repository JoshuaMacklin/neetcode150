// if couldnt use indexOf, then we would need to use a binary search algorithm. 
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length -1
        while(l<=r){
            let m = l + Math.floor((r - l) /2)
            // console.log(l, m, r)
            if (nums[m] < target){
                l = m + 1
            } else if (nums[m] > target) {
                r = m - 1
            } else {
                return m
            }
        }
        return -1
    }
}


// First Solution
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return nums.indexOf(target) 
    }
}
