/**
 * Represents a building.
 */
export default class Building {
  /**
     * Creates a new Building instance.
     * @param {number} sqft - The square footage of the building.
     * @throws {Error} If sqft is not a number.
     */
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Square footage must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
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
     * Displays the evacuation warning message.
     * This method should be overridden by subclasses.
     * @throws {Error} If the method is not overridden in a subclass.
     */
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
