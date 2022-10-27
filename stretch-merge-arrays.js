const merge = (array1, array2) => {
  let concatArray = array1.concat(array2);

  for (let i = 1; i < concatArray.length; i++) {

    for (let j = i - 1; j > -1; j--) {
      if (concatArray[j + 1] < concatArray[j]) {
        [concatArray[j + 1], concatArray[j]] = [concatArray[j], concatArray[j + 1]];
      }
    }
  }
  return concatArray;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);