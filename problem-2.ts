//   ===================Problem_2========================
//Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (removDup: number[]) => {
  return [...new Set(removDup)];
};
// console.log(removeDuplicates([1, 1, 2, 2, 3, 5, 1, 6]));
