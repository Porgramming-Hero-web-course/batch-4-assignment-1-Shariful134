//   ===================Problem_1========================
//Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (array: number[]) => {
  const sum = array.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  return sum;
};
// console.log(sumArray([10, 4, 4, 6]));
