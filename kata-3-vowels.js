// we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

// Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.
const numberOfVowels = function(data) {

  // declare placeholder variable
  let vowelCounter = 0;

  // loop through given array
  for (let i = 0; i < data.length; i++) {

    // if data[i] is the same value and type as "a", "e", "i", "o", or "u", add +1 to the variable vowelCounter
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      vowelCounter = vowelCounter + 1;
    }
  }
  
  // return updated variable vowelCounter
  return vowelCounter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// Expected Output

// 3
// 5
// 5