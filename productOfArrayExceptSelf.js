/* Question: 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [0,0]
Output: [0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let resultArr = [];
    for(let i=0; i<nums.length; i++ ){
      let product = 1;
      for(let j = 0; j<nums.length; j++){
        if(i!==j){
          product = product * nums[j];
        }     
      }
      resultArr.push(product);
    }
    return resultArr;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([0,0]));
