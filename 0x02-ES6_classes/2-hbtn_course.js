export default class HolbertonCourse {
  // Constructor to initialize the class properties
  constructor(name, length, students) {
    this.name = name; // Call the setter for 'name'
    this.length = length; // Call the setter for 'length'
    this.students = students; // Call the setter for 'students'
  }

  // Getter for 'name' property
  get name() {
    return this._name; // Return the private property '_name'
  }

  // Setter for 'name' property
  set name(val) {
    // Check if the value is a string
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string'); // Throw error if the value is not a string
    }
    this._name = val; // Set the private property '_name'
  }

  // Getter for 'length' property
  get length() {
    return this._length; // Return the private property '_length'
  }

  // Setter for 'length' property
  set length(val) {
    // Check if the value is a number
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number'); // Throw error if the value is not a number
    }
    this._length = val; // Set the private property '_length'
  }

  // Getter for 'students' property
  get students() {
    return this._students; // Return the private property '_students'
  }

  // Setter for 'students' property
  set students(val) {
    // Check if the value is an array
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array'); // Throw error if the value is not an array
    }
    // Check if all elements in the array are strings
    for (let i = 0; i < val.length; i++) {
      if (typeof val[i] !== 'string') {
        throw new TypeError('Students must be an array of strings'); // Throw error if any element is not a string
      }
    }
    this._students = val; // Set the private property '_students'
  }
}
