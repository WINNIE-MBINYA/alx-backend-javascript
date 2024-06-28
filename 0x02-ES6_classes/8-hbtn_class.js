/**
 * Represents a Holberton class with a size and location.
 */
export default class HolbertonClass {
  /**
     * Creates a new HolbertonClass instance.
     * @param {number} size - The size of the class.
     * @param {string} location - The location of the class.
     * @throws {Error} If size is not a number or location is not a string.
     */
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error('Size must be a number and location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  /**
     * Customizes the default coercion behavior of the HolbertonClass object.
     * @param {string} hint - The type hint for coercion ('string', 'number', or 'default').
     * @returns {string|number|object}
     */
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return this;
  }
}
