const smartGarbage = (trash, bins) => {
  bins[trash] = bins[trash] + 1;
  return bins;
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));