function isPalindrome(word) {
  // Write your algorithm here
  let reverse = "";
  for(let i=word.length-1; i>=0; i--){
    let letter = word[i]
    reverse+= letter;
  }
  if(reverse === word){
    return true
  }
  else{
    return false
  }
}
isPalindrome("car")

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting car: false");
  console.log("=>", isPalindrome("car"));
  console.log("");
  console.log("Expecting reacecar: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting robot: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
