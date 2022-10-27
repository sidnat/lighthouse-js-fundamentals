const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = (moves) => {
  const finalCoordinates = [0, 0];
  
  for (let direction of moves) {
    if (direction === 'east') {
      finalCoordinates[0] = finalCoordinates[0] + 1;
    } else if (direction === 'west') {
      finalCoordinates[0] = finalCoordinates[0] - 1;
    } else if (direction === 'north') {
      finalCoordinates[1] = finalCoordinates[1] + 1;
    } else if (direction === 'south') {
      finalCoordinates[1] = finalCoordinates[1] - 1;
    }
  }
  return finalCoordinates;
};

console.log(finalPosition(moves));

// [-1, 4]