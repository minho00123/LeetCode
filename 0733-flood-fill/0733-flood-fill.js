/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, oldColor = image[sr][sc]) {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] === newColor || image[sr][sc] !== oldColor) {
        return image;
    }
    
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, oldColor);
    floodFill(image, sr - 1, sc, newColor, oldColor);
    floodFill(image, sr, sc + 1, newColor, oldColor);
    floodFill(image, sr, sc - 1, newColor, oldColor);
    
    return image
};