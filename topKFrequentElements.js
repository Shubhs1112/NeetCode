/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    for(let el of nums){
      if(!map[el]){
          map[el] = 0;
      }
        map[el]++;
    }
    return [...Object.keys(map)].sort((a,b) => map[b] - map[a]).slice(0,k);
};
