/*
Question: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length === 0) return 0;
    let newArr = nums.sort((a,b) => a-b);
    let count = 0;
    let myArr = [];
    for(let i=0; i<newArr.length; i++){
        if(newArr[i+1] -newArr[i] === 0) {
          continue;
        }
        else if(newArr[i+1] - newArr[i] == 1){
          count++;
        } 
        else {
          myArr.push(count+1);
          count = 0;
        } 
    }
    return Math.max(...myArr);
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
