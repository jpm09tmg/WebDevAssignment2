const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <div key={student.id}>
          <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
          <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
          <p><strong>Grade:</strong> {student.currentGrade}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default StudentList;