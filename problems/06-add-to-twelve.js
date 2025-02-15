/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

***********************************************************************/


function addToTwelve(arr) {
  
if (arr.length < 2) {
  return false
}
// let num1 = arr[arr.length - 1]
// let num2 = arr[arr.length - 2]
// arr.pop()

// if (num1 + num2 === 12) {
//   return true
// }
// return addToTwelve(arr)

if (arr[0] + arr[1] === 12) {
  return true
}
return addToTwelve(arr.slice(1))


}

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
console.log(addToTwelve([1, 12, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
