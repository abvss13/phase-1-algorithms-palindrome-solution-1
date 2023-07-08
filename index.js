function isPalindrome(word) {
  const alphanumericWord = word.replace(/[^a-zA-Z0-9]/g, '');
  const lowercaseWord = alphanumericWord.toLowerCase();
  const reversedWord = lowercaseWord.split('').reverse().join('');
  return lowercaseWord === reversedWord;
}

/* 
  Pseudocode:
  1. Remove any non-alphanumeric characters from the word.
  2. Convert the word to lowercase for case-insensitive comparison.
  3. Reverse the word.
  4. Check if the reversed word is equal to the original word.
  5. Return true if they are equal, false otherwise.
*/

// Custom tests
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
