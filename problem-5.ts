//======================problem_5============================
//Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

const getProperty = <T, X extends keyof T>(param: T, key: X) => {
  return param[key];
};
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
