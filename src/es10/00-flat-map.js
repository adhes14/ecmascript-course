//flat
const array = [1, 2, 4, 5, 7, [5, 7, 9, 6, [3, 7, 6]]];
console.log(array);
console.log(array.flat(3));
console.log(array.flat(3)[9]);

// flat map
const array2 = [1, 2, 4, 5, 6];
console.log(array2.flatMap(v => [v, v*2]));