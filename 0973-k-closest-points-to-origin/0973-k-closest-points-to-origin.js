/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, k);
};

function getLength([a, b]) {
    return (a * a) + (b * b);
}