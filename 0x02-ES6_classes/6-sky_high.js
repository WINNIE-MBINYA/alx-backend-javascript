import Building from './5-building';

/**
 * Represents a sky-high building.
 * Extends the Building class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding instance.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   * @throws {Error} If floors is not a number.
   */
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw new Error('Floors must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  /**
   * Gets the square footage of the building.
   * @returns {number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {number} value - The new square footage.
   */
  set sqft(value) {
    this._sqft = value;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building.
   * @param {number} value - The new number of floors.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Displays the evacuation warning message.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
