// we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

// Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
const sumLargestNumbers = (data) => {

  // nested function, find the highest number and remove it from given array.
  const findHighestAndRemove = (arr) => {

    //If length of array is less than or equal to 0, return -1
    if (arr.length <= 0) {
      return -1;
    }

    // declare variables, highest is the value in the first index position, highestIndex is index position 0
    let highest = arr[0];
    let highestIndex = 0;
    
    // loop through array starting at second index position
    for (let i = 1; i < arr.length; i++) {

      // if value arr[i] is greater than the value stored in the variable highest, set highest to the value arr[i] and set highestIndex to i
      if (arr[i] > highest) {
        highest = arr[i];
        highestIndex = i;
      }
    }

    // remove value at the index highestIndex from array so that subsequent runs of the findHighestAndRemove function won't keep returning the same number
    arr.splice(highestIndex, 1);

    // return the largest number
    return highest;
  };

  // return the value given by the first run of the nested function findHighestAndRemove, add the value given by the second run of the nested function findHighestAndRemove. this will be the sum of the two largest numbers.
  return findHighestAndRemove(data) + findHighestAndRemove(data);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Expected output

// 11
// 5
// 126



// the following was my first attempt, I used a selection sort method. I simplified in the above code to be more efficient using a nested function

// const sumLargestNumbers = (data) => {
//   let lowest;

//   for (let i = 0; i < data.length; i++) {
//     lowest = i;
    
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] < data[lowest]) {
//         lowest = j;
//       }
//     }
    
//     if (lowest !== i) {
//       [data[i], data[lowest]] = [data[lowest], data[i]];
//     }
//   }
  
//   sumLargest = data[data.length - 1] + data[data.length - 2];

//   return sumLargest
// }