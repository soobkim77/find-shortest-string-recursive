function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const result = findShortestStringRecursive(arr.slice(1));

  return arr[0].length <= result.length ? arr[0] : result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
/* 
1. The function will take in array [hi, bye, whhere] and find the shortest string
2. let arr[0] = shortest, (not actually needed)
3. fxn(arr) sets base case when
 {
  arr.length = 1, return arr[0]
}
4. contional inside (if arr[0].length > arr[1].length) {
    arr.splice(0)
    return fxn(arr)
} else {
  arr.splice(1)
  retrun fxn(arr)
}



*/



// And a written explanation of your solution
