// One Line Solution
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * 
     * Check left = [0][-1] and right = [-1][0]
     * if target is smaller than left pointer | Check current scalar
     * if target is larger right pointer  | Check current scalar
     * if target is between left and right | create middle
     */
    searchMatrix(matrix, target) {
       return matrix.flat().indexOf(target) >= 0 ? true : false
    }
}


// First Solution
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let scalar of matrix){
            if (scalar.indexOf(target) != -1){return true}
        }
        return false
    }
}
