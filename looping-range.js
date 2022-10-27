const range = (start, end, step) => {
  const rangeArray = [];

  if (step > 0 && start < end && !isNaN(start) && !isNaN(end) && !isNaN(step)) {
    for (let i = start; i <= end; i = i + step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));