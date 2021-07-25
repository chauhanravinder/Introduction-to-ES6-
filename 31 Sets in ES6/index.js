const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2]);

exampleSet.add(4);
exampleSet.add(5).add(17);

// for delete the element from set
console.log(exampleSet.delete(5));

// for check set has value or not
console.log(exampleSet.has(5));
console.log(exampleSet.has(17));

// for clear the set
console.log(exampleSet.clear());

console.log(exampleSet.size);
