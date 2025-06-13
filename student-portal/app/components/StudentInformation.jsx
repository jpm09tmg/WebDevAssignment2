'use client';

import { useState } from 'react';
import StudentList from './StudentList.jsx';
import AddForm from './AddForm.jsx';
import studentsData from '../data/students.json';

const StudentInfo = () => {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (newStudent) => {
    const newId = students.length + 1;
    setStudents([...students, { ...newStudent, id: newId }]);
  };

  return (
  <div>
    <StudentList students={students} />
    <AddForm addStudent={addStudent} />  
  </div>
);
};

export default StudentInfo;