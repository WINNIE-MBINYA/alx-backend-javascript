import Car from './10-car';

/**
 * Represents an electric vehicle (EV) car, extending the Car class.
 */
export default class EVCar extends Car {
  /**
   * Creates a new EVCar instance.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   * @param {number} range - The range of the electric car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Clones the car. This method is specific to EVCar and returns a new Car instance.
   * @returns {Car} A new instance of the Car.
   */
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
