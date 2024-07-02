import getListStudents from './0-get_list_students';

/**
 * Filters a list of students by their location.
 *
 * @param {string} city - The city to filter students by.
 * @param {Array} [student=getListStudents()] - The list of students to filter.
 * @returns {Array} - The filtered list of students located in the specified city.
 */
export default function getStudentsByLocation(city, student = getListStudents()) {
  // Use the filter method to create a new array with students located in the specified city
  return student.filter((el) => el.location === city);
}
