/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sObj = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in sObj) {
            sObj[s[i]] += 1;
        } else {
            sObj[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] in sObj) {
            if (sObj[t[i]] === 0) {
                return false;
            } else {
                sObj[t[i]] -= 1;
            }
        } else {
            return false;
        }
    }

    const sum = Object.values(sObj).reduce((acc, cur) => acc + cur);

    if (sum === 0) {
        return true;
    } else {
        return false;
    }
};