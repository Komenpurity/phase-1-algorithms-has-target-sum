function hasTargetSum(array, target) {
  // Write your algorithm here
  const dispNumber = {};
  
  for (const number of array) {
    const newNumber = target - number;
    if (newNumber in dispNumber) return true;
    dispNumber[number] = true;
  }



return false;
}

/* 
  Write the Big O time complexity of your function here
  
*/

/* 
  Add your pseudocode here
  create an object to keep track of numbers we've already displayed
  iterate through each number in the array
    for the current number, identify a newNumber that adds to the target (newNumber = target - num)
    check if any key on our object is the newNumber
      if so, return true
      otherwise, add that number to the object
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
