class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let strSpl = s.toLowerCase().replace(/[^a-z0-9]/gi, "").split("")
        for(let i=0, j=strSpl.length-1; i<strSpl.length/2; i++, j--){
            if(strSpl[i] !== strSpl[j]){
                return false
            }
        }
        return true
    }
}