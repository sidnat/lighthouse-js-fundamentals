const lastIndexOf = (array, value) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3); //no
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([5,5,5,5,0],5), "=?", 3); //no
console.log(lastIndexOf([0,0,0,0,5,0],5), "=?", 4); //no

// const lastIndexOf = (array, value) => {
//   if (array.length > 0) {
//     for (let i = array.length - 1; i >= 0; i = i - 1) {
//       if (value === array[i]) {
//         return i;
//       } else {
//         return -1;
//       }
//     }
//   } else {
//     return -1;
//   }
// }


// const lastIndexOf = (array, value) => {
//   if (array.length > 0) {
//     for (let i = array.length - 1; i >= 0; i--) {
//       if (value === array[i]) {
//         return i;
//       }
//     }
//     return -1;
//   } else {
//     return -1;
//   }
// }

