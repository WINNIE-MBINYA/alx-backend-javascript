/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */

/**
 * Represents a Holberton class with a specific year and location.
 */
export class HolbertonClass {
  /**
     * Creates a new HolbertonClass instance.
     * @param {number} year - The year of the class.
     * @param {string} location - The location of the class.
     */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
     * Gets the year of the class.
     * @returns {number} The year of the class.
     */
  get year() {
    return this._year;
  }

  /**
     * Gets the location of the class.
     * @returns {string} The location of the class.
     */
  get location() {
    return this._location;
  }
}

/**
   * Represents a student in a Holberton class.
   */
export class StudentHolberton {
  /**
     * Creates a new StudentHolberton instance.
     * @param {string} firstName - The first name of the student.
     * @param {string} lastName - The last name of the student.
     * @param {HolbertonClass} holbertonClass - The Holberton class the student is part of.
     */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
     * Gets the full name of the student.
     * @returns {string} The full name of the student.
     */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
     * Gets the Holberton class of the student.
     * @returns {HolbertonClass} The Holberton class of the student.
     */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
     * Gets the full description of the student.
     * @returns {string} The full description of the student.
     */
  get fullStudentDescription() {
    return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

// Instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// List of students
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
