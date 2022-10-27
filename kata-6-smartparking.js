// There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.
// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.
// In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.
// Our function must return an array with the coordinates of the spot as an [X, Y] pair. There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.


// write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.
const whereCanIPark = function(spots, vehicle) {

  // loop through spots array
  for (let i = 0; i < spots.length; i++) {

    // loop through nested array spots[i]
    for (let j = 0; j < spots[i].length; j++) {
      
      // if vehicle is 'regular', run nested if
      if (vehicle === 'regular') {

        // if parking spot value is same value and type as "R", return corresponding [x, y] coordinate
        if (spots[i][j] === "R") {
          return [j, i];
        }

      // else if vehicle is 'small', run nested if
      } else if (vehicle === 'small') {

        // if parking spot value is same value and type as "R" or "S", return corresponding [x, y] coordinate
        if (spots[i][j] === "R" || spots[i][j] === "S") {
          return [j, i];
        }

      // else if vehicle is 'motorcycle', run nested if
      } else if (vehicle === 'motorcycle') {

        // if parking spot is same value and type as "R" or "S" or "M", return corresponding [x, y] coordinate
        if (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M") {
          return [j, i];
        }
      }
      
      // if we have fully looped to the end of the array and nested arrays, return false as no parking spots are available
      if (i === spots.length - 1 && j === spots[i].length - 1) {
        return false;
      }
    }
  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));

// Expected Output

// [4, 0]
// false
// [3, 1]