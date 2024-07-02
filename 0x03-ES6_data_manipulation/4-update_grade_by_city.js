// 4-update_grade_by_city.js
function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeObj) {
      return { ...student, grade: gradeObj.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}

export default updateStudentGradeByCity;
