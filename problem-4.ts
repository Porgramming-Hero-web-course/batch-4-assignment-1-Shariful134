//======================problem_4============================
//Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type Area = Circle | Rectangle;

const calculateShapeArea = (value: Area) => {
  if ( value.shape === "circle") {
    return Math.PI * value.radius * value.radius;
  } else if (value.shape === "rectangle") {
    return value.height * value.width;
  }
};
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
