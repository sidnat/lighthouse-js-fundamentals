// implement a function called checkAir(), which will check a collection of air samples. checkAir() will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples. A threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. checkAir() must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

// Create a function named checkAir that will take in two arguments, an array of strings and a number
const checkAir = (samples, threshold) => {

  // declare a variable dirtySamples as a placeholder
  let dirtySamples = 0;

  // loop through samples array
  for (let i = 0; i < samples.length; i++) {

    // if sample is 'dirty', add +1 to dirtySamples variable
    if (samples[i] === 'dirty') {
      dirtySamples = dirtySamples + 1;
    }
  }

  // calculate percentage of pollution level by dividing number of dirty samples by length of samples array
  const pollutionLevel = dirtySamples / samples.length;

  // if the amount of pollution is greater than threshold, return "Polluted", else return "Clean"
  if (pollutionLevel > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

// Expected Output

// Polluted
// Polluted
// Clean