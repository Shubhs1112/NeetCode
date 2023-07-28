/*
Question: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let result = s.replace(/[^a-zA-Z0-9]/g, '');
    let rev = result.split('').reverse().join('');
    if( result.toLowerCase() === rev.toLowerCase()){
      return true;
    }
    return false;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
