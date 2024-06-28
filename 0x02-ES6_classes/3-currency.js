/**
 * Represents a currency.
 */
export default class Currency {
  /**
     * Creates a new Currency instance.
     * @param {string} code - The currency code.
     * @param {string} name - The currency name.
     * @throws {Error} If code or name is not a string.
     */
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new Error('Code and name must be strings');
    }
    this.code = code;
    this.name = name;
  }

  /**
     * Gets the currency code.
     * @returns {string} The currency code.
     */
  get code() {
    return this._code;
  }

  /**
     * Sets the currency code.
     * @param {string} val - The new currency code.
     */
  set code(val) {
    this._code = val;
  }

  /**
     * Gets the currency name.
     * @returns {string} The currency name.
     */
  get name() {
    return this._name;
  }

  /**
     * Sets the currency name.
     * @param {string} val - The new currency name.
     */
  set name(val) {
    this._name = val;
  }

  /**
     * Displays the full currency format.
     * @returns {string} The full currency format.
     */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
