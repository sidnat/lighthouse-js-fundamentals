// we will be given a list of instructors and have to determine which instructor has the longest name.

// Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
const instructorWithLongestName = (instructors) => {

  // declare variable as placeholder, set it to first index position
  let longestNameIndex = 0;

  // loop through instructors array beginning at second index
  for (let i = 1; i < instructors.length; i++) {

    // if length of instructors[i].name is greater than the name previously stored in the index longestNameIndex, longestNameIndex is equal to new index i. Names of equal length are disregarded.
    if (instructors[i].name.length > instructors[longestNameIndex].name.length) {
      longestNameIndex = i;
    }
  }

  // return object within array at index value stored in longestNameIndex
  return instructors[longestNameIndex];
};
  
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// Expected Output

// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}