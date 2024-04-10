/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineCharNums = {};
    
    magazine.split("").forEach(char => {
        if (Object.keys(magazineCharNums).includes(char)) {
            magazineCharNums[char]++;
        } else {
            
            magazineCharNums[char] = 1;
        }
    });

    const splittedRansomNote = ransomNote.split("");

    for (let i = 0; i < splittedRansomNote.length; i++) {
         if (!(Object.keys(magazineCharNums).includes(splittedRansomNote[i]))) {
            return false;
        } else {
            magazineCharNums[splittedRansomNote[i]]--;

            if (magazineCharNums[splittedRansomNote[i]] < 0) {
                return false;
            }
        }
    }

    return true;
};