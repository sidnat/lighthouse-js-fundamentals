// we'll be adding only the numbers in the array which match the given condition.

// Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.
const conditionalSum = (values, condition) => {

  // declare placeholder variables
  let sum = 0;
  let modulusOperator;
  
  // if given argument condition is even, set modulusOperater = 0
  if (condition === "even") {
    modulusOperator = 0;
  
  // if given argument condition is odd, set modulusOperater = 1
  } else if (condition === "odd") {
    modulusOperator = 1;

  // if no condition given, return 0
  } else {
    return 0;
  }

  // if length of values is greater than 0 run for loop
  if (values.length > 0) {
    
    // loop through values array
    for (let i = 0; i < values.length; i++) {

      // if value at index i % 2 is equal to modulusOperator, add to sum
      if (values[i] % 2 === modulusOperator) {
        sum = sum + values[i];
      }
    }

  // else return 0
  } else {
    return 0;
  }

  // return updated sum
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// Expected Output

// 6
// 9
// 144
// 0



// the following was my first attempt which I simplified above to be more efficient

// const conditionalSum = function(values, condition) {
//   let sum = 0;
  
//   if (values.length > 0 && condition == "even") {
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 == 0) {
//         sum = sum + values[i];
//       }
//     }
//   } else if (values.length > 0 && condition == "odd") {
//     for (let i = 0; i < values.length; i++) {
//       if (values[i] % 2 == 1) {
//         sum = sum + values[i];
//       }
//     }
//   } else {
//     return 0;
//   }
  
//   return sum;
// }