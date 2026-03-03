class Solution {
    /**
     * Returns the length of the longest substring without repeating characters.
     *
     * @param {string} s
     * @return {number}
     */
  lengthOfLongestSubstring(s) {
    // Edge case: empty string
    if (!s) return 0;

    /** @type {Map<string, number>} */
    const charIndexMap = new Map(); // character -> its latest index
    let left = 0;                    // start of the current window
    let maxLen = 0;                  // longest length found so far

    for (let right = 0; right < s.length; right++) {
      const ch = s[right];

      // If the character was seen inside the current window,
      // shrink the window from the left just past its previous index.
      if (charIndexMap.has(ch)) {
        // Move left only forward; Math.max prevents moving backward.
        left = Math.max(charIndexMap.get(ch) + 1, left);
      }

      // Record the latest index of the character.
      charIndexMap.set(ch, right);

      // Update the maximum length.
      maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
  }
}
