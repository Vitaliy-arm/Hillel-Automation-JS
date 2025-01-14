const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const sortList = [...numbersList];

sortList.sort((a, b) => a - b);

console.log('Not sorted array:', numbersList);
console.log('Sorted array:', sortList);
