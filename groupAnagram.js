/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for(const s of strs){
    const key = s.split('').sort().join('');

    if(map[key]){
      map[key].push(s);
    }
    else{
      map[key] = [s];
    }
    }
   return Object.values(map);
};
