/**
 * Represents a car with a specific brand, motor, and color.
 */
export default class Car {
  /**
     * Creates a new Car instance.
     * @param {string} brand - The brand of the car.
     * @param {string} motor - The motor type of the car.
     * @param {string} color - The color of the car.
     */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
     * Clones the car.
     * @returns {Car} A new instance of the Car with the same properties.
     */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
