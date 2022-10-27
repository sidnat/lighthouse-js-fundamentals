const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

const judgeVegetable = (vegetables, metric) => {
  let bestVeggie;

  for (let i = 0; i < vegetables.length; i++) {
    bestVeggie = i;

    for (let j = i + 1; j < vegetables.length; j++) {
      if (vegetables[j].metric < vegetables[bestVeggie].metric) {
        bestVeggie = j;
      }
    }
    return vegetables[bestVeggie].submitter;
  }
};

console.log(judgeVegetable(vegetables, metric));

// Old Man Franklin