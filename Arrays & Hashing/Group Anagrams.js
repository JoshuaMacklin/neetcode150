class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};
        for(let s of strs) {
            let sorted = s.split('').sort().join('');
            if (!obj[sorted]) {
                obj[sorted] = [];
            }
            obj[sorted].push(s);
        }
        return Object.values(obj);
    }
}