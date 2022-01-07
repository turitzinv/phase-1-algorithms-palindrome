function isPalindrome(word) {
  // Write your algorithm here
  const normalArray = word.split('') //array that will be manipulated to backwards
  const forwardArray = [...normalArray] //copied normalArray before destruction
  const backwardsArray = normalArray.reverse() //converted normalArray to be backwards

    if (forwardArray.join('') === backwardsArray.join('')) {
      return true
    } else {
      return false
    }
}

/* 
  Add your pseudocode here

  1. Split the string into an array where each letter is an element, declare it to a new variable
  2. Create a copy of that new variable that contains the split array.
  3. Create a new variable called backwardsArray and reverse the copied array.
  4. Join strings and see if the copied array equals the same value of the backwards array.

*/

/*
  Add written explanation of your solution here
  I convert the added string to an array where each element is a letter.
  I then create two more arrays, one a copy and one a backwards version of the original.
  I then compare the regular and backwards arrays by joining the elements together to see if the value is the same.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
