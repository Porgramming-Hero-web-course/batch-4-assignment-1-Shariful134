//=========================Problem_7======================
//Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge() {
    const currentYear = new Date().getFullYear();
    const car_Age = currentYear - this.year;
    return car_Age;
  }
}
// const car = new Car("Honda", "Civic", 2019);
// console.log(car.getCarAge());
