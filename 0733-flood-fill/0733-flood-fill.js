/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    fill(image, sr, sc, color, image[sr][sc]);
    
    return image;
};

const fill = function(image, x, y, newColor, firstColor) {
    if (x < 0 || y < 0 || x >= image.length || y >= image[x].length || image[x][y] === newColor || image[x][y] !== firstColor) {
        return;
    }
    
    image[x][y] = newColor;
    
    fill(image, x + 1, y, newColor, firstColor);
    fill(image, x - 1, y, newColor, firstColor);
    fill(image, x, y + 1, newColor, firstColor);
    fill(image, x, y - 1, newColor, firstColor);
}