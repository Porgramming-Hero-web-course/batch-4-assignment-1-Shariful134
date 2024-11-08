// Type guard is a pattern or technique in TypeScript that help to ensure type validation. Specially when if your variable type is multiple type.
// TypeScript has various types of type guards.
// 1. typeof Type Guard
// It is generally used for primitive types such as string, number, boolean etc. Using typeof we can check whether a variable of a specific type.

// Example_1:
function Student(num: string | number) {
if (typeof num === "string") {
console.log("this is string"); // যদি value string হয়
} else {
console.log("this is number"); // যদি value number হয়
}
}

Student("Shariful islam"); // Output: String: this is string
Student(10);

// // it is usually used when you create an object and using instanceof,
// // we can check if the object exists.
// // The instanceof keyword is used to check the type of an object, specifically an instance of a class.

// Example_2:
class Cat {
getCat() {
console.log("This is Cat!");
}
}

class Book {
getBook() {
console.log("This is Book!");
}
}

function getResult(param: Book | Cat) {
if (param instanceof Book) {
param.getBook();
} else {
param.getCat();
}
}

getResult(new Book());
getResult(new Cat());

// // The in operator is used to check whether a property exists within the object.
// // It can be used when checking the presence of certain properties of an object.
// In TypeScript, the in operator is used to check if a property exists on an object,

======================Example_3=======================
interface Cat {
getCat(): void;
}

interface Book {
getBook(): void;
}

class ThisCat extends Cat {
getCat() {
console.log("this is Cat");
}
}

class ThisBook extends Book {
getBook() {
console.log("this is Book");
}
}
function getResult(param: ThisCat | ThisBook) {
if ("getCat" in param) {
param.getCat();
}
}

getResult(new ThisCat());
getResult(new ThisBook());

===============example_4================
We can use typeguard nul or undefined to determine whether a variable is null or undefined and execute the correct code accordingly.

// Example_1:
function Student(num: nul | undefined) {
if (typeof num === "nul") {
console.log("this is nul"); // যদি value null হয়
} else {
console.log("this is undefined"); // যদি value undefined হয়
}
}

Student(null); //
Student(undifined);
