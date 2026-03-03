class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // Edge cases
        if (!t || s.length < t.length) return '';

        //Build frequency table for t 
        // Using a Map works for any Unicode characters.
        const need = new Map();
        for (const ch of t) {
            need.set(ch, (need.get(ch) ?? 0) + 1);
        }
        const requiredKinds = need.size;

        // Sliding window
        const have = new Map();          // current window frequencies
        let formed = 0;                  // how many distinct chars meet required count
        let left = 0;

        // Best window tracking (length, start index)
        let bestLen = Infinity;
        let bestStart = 0;

        for (let right = 0; right < s.length; ++right) {
            const ch = s[right];
            have.set(ch, (have.get(ch) ?? 0) + 1);

            // If this char now satisfies its required count, increment `formed`
            if (need.has(ch) && have.get(ch) === need.get(ch)) {
                ++formed;
            }

            // Try to shrink while window is valid 
            while (formed === requiredKinds) {
                const windowLen = right - left + 1;
                if (windowLen < bestLen) {
                    bestLen = windowLen;
                    bestStart = left;
                }

                const leftChar = s[left];
                have.set(leftChar, have.get(leftChar) - 1);

                // If we drop below the needed count, window becomes invalid
                if (need.has(leftChar) && have.get(leftChar) < need.get(leftChar)) {
                    --formed;
                }
                ++left; // move left border forward
            }
        }

        // Return result
        return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen);

    }
}