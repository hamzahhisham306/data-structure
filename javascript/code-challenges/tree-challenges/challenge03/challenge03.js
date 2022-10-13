
// Write here the code challenge solution
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}



function arrayTOBts(nums) {
    if (!nums.length) return null;
    let mid = Math.floor(nums.length / 2);
    let newNode = new Node(nums[mid]);
    newNode.left = arrayTOBts(nums.slice(0, mid));
    newNode.right = arrayTOBts(nums.slice(mid + 1));
    return newNode;
};


module.exports = { arrayTOBts };