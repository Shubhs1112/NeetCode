/* Question : Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/


var isAnagram = function(s, t){
    if(s.length < t.length){
        return false;
    }
    for(let x=0; x<s.length; x++){
        if(s.indexOf(t[x]) == -1){
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram","nagaram")); //output => true
console.log(isAnagram("rat","car"));  //output => false
