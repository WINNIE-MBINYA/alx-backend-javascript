/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course (in weeks).
   * @param {string[]} students - The names of students enrolled in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} val - The new name of the course.
   * @throws {TypeError} If the name is not a string.
   */
  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  /**
   * Gets the length of the course.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {number} val - The new length of the course.
   * @throws {TypeError} If the length is not a number.
   */
  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  /**
   * Gets the list of students enrolled in the course.
   * @returns {string[]} The names of students.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the list of students enrolled in the course.
   * @param {string[]} val - The new list of students.
   * @throws {TypeError} If students is not an array of strings.
   */
  set students(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array');
    }
    for (let i = 0; i < val.length; i += 1) { // Using `i += 1` instead of `i++`
      if (typeof val[i] !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = val;
  }
}
