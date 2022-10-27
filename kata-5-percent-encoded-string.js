// we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

// Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.
const urlEncode = (text) => {

  // declare placeholder variables
  let firstIndex = 0;
  let lastIndex = 0;
  let encodedString = [];

  // loop forward through the array
  for (let i = 0; i < text.length; i++) {

    // if value of text[i] is not whitespace, store index i in firstIndex
    if (text[i] !== " ") {
      firstIndex = i;
      break;
    }
  }
  
  // reverse loop through the array
  for (let j = text.length - 1; j >= 0; j = j - 1) {

    // if value of text[j] is not whitespace, store index j in lastIndex
    if (text[j] !== " ") {
      lastIndex = j;
      break;
    }
  }

  // loop through string starting at firstIndex and finishing at lastIndex
  for (let i = firstIndex; i < lastIndex + 1; i++) {

    // if the value of text[i] is whitespace, add "%20" to encodedString
    if (text[i] === " ") {
      encodedString = encodedString + "%20";
    
    // else add the value of text[i] to encodedString
    } else {
      encodedString = encodedString + text[i];
    }
  }

  // return updated encodedString variable which is the new percent-encoded string
  return encodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Expected Output

// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure