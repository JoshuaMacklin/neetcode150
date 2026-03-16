class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let opposites = {")":"(","]":"[","}":"{"}
        for(let c of s){
            if (opposites[c]){
                if (stack.length > 0 &&
                    stack[stack.length - 1] === opposites[c]){
                    stack.pop()
                } else {                    
                    return false
                }
            } else {
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}

// First solution brute forced
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        while(s.includes("()") || s.includes("{}") || s.includes("[]")){
            s = s.replace("()", ""),
            s = s.replace("{}", ""),
            s = s.replace("[]", "")
        }
        return s === ""
    }
}