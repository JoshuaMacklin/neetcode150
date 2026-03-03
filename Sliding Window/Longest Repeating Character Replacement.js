class Solution {
    /**
     * Returns the length of the longest substring that can be turned
     * into a string of identical characters by replacing at most `k`
     * characters.
     *
     * @param {string} s - Input string (uppercase A‑Z)
     * @param {number} k - Maximum number of allowed replacements
     * @returns {number}
     */
    characterReplacement(s, k) {
        if (!s) return 0;                     // empty input edge case

        const freq = new Array(26).fill(0);   // frequency of each letter in the window
        const charCodeA = 'A'.charCodeAt(0);

        let left = 0;                         // left boundary of the sliding window
        let maxFreq = 0;                      // highest frequency of any single char in the window
        let best = 0;                         // longest feasible window seen so far

        for (let right = 0; right < s.length; right++) {
            const idx = s.charCodeAt(right) - charCodeA;
            freq[idx]++;                       // include s[right] in the window
            maxFreq = Math.max(maxFreq, freq[idx]);

            // Window size minus the count of the most frequent char
            // tells us how many replacements are needed.
            while ((right - left + 1) - maxFreq > k) {
                const leftIdx = s.charCodeAt(left) - charCodeA;
                freq[leftIdx]--;               // shrink from the left
                left++;
            }

            // At this point the window [left … right] is valid.
            best = Math.max(best, right - left + 1);
        }

        return best;
    }
}