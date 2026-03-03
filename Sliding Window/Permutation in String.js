class Solution {
    /**
     * Returns true if any permutation of s1 appears as a substring of s2.
     * Works for lowercase English letters only.
     *
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Len = s1.length;
        const s2Len = s2.length;
        if (s1Len === 0) return true;
        if (s1Len > s2Len) return false;

        const ALPHABET = 26;
        const aCode = 'a'.charCodeAt(0);
        const freqDiff = new Int16Array(ALPHABET);
        let mismatchCount = 0;

        // initialise first window
        for (let i = 0; i < s1Len; i++) {
            freqDiff[s1.charCodeAt(i) - aCode]--;
            freqDiff[s2.charCodeAt(i) - aCode]++;
        }
        for (let i = 0; i < ALPHABET; i++) {
            if (freqDiff[i] !== 0) mismatchCount++;
        }
        if (mismatchCount === 0) return true;

        const update = (idx, delta) => {
            if (freqDiff[idx] === 0) mismatchCount++;
            freqDiff[idx] += delta;
            if (freqDiff[idx] === 0) mismatchCount--;
        };

        // slide the window
        for (let right = s1Len; right < s2Len; right++) {
            const leftIdx  = s2.charCodeAt(right - s1Len) - aCode;
            const rightIdx = s2.charCodeAt(right) - aCode;

            update(leftIdx, -1);   // character leaves window
            update(rightIdx, +1);  // character enters window

            if (mismatchCount === 0) return true;
        }
        return false;
    }
}