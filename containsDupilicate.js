/*  Question :Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(i==j){
                continue;
            }
            else if(nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false;
};
