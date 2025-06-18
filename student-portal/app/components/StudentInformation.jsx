'use client';

{
  /* Lama, Protsahan
     Martin, Josh
     Sompol, Pharadon
     This program displays a list of students at New Generation High School.
     It has a form to add new students to the list.
     Inputs are name, birthday, and grade. */
    }

import { useState } from 'react';
import StudentList from './StudentList.jsx';
import AddForm from './AddForm.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import studentsData from '../data/students.json';

const StudentInfo = () => {
  // State to store the list of students, starting with data from JSON file
  const [students, setStudents] = useState(studentsData);

  // Function to add a new student to the list
  const addStudent = (newStudent) => {
    // Generate a new ID based on current list length
    const newId = students.length + 1;
    // Add the new student with the generated ID to the existing list
    setStudents([...students, { ...newStudent, id: newId }]);
  };

  return (
    <>
      {/* Main page container */}
      <div className="container">
        {/* Page header */}
        <Header />
        
        {/* Main content area */}
        <main className="main">
          {/* Student list section */}
          <div className="card">
            <h2 className="title">Student Management System</h2>
            <StudentList students={students} />
          </div>
          
          {/* Add student form section */}
          <div className="card">
            <h3 className="subtitle">Add New Student</h3>
            <AddForm addStudent={addStudent} />
          </div>
        </main>
        
        {/* Page footer */}
        <Footer />
      </div>

      {/* Component styling */}
      <style>{`
        
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #eff6ff;
        }

        
        .main {
          flex: 1;
          padding: 32px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        
        .card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 32px;
          margin-bottom: 32px;
        }

        
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 24px;
          text-align: center;
        }

        
        .subtitle {
          font-size: 20px;
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 16px;
        }
      `}</style>
    </>
  );
};

export default StudentInfo;